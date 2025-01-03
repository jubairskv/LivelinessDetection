package com.demo

import android.Manifest
import android.app.Activity
import android.content.pm.PackageManager
import android.provider.ContactsContract
import androidx.core.app.ActivityCompat
import androidx.core.content.ContextCompat
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class MyNativeModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {

    companion object {
        private const val PERMISSION_REQUEST_CODE = 101
    }

    override fun getName(): String = "MyNativeModule"

    @ReactMethod
    fun requestWriteContactsPermission(promise: Promise) {
        val activity: Activity? = currentActivity

        if (activity == null) {
            promise.reject("ACTIVITY_NULL", "Activity is null")
            return
        }

        val permission = Manifest.permission.WRITE_CONTACTS

        if (ContextCompat.checkSelfPermission(activity, permission) == PackageManager.PERMISSION_GRANTED) {
            // Permission already granted
            promise.resolve(true)
        } else {
            // Request permission
            ActivityCompat.requestPermissions(activity, arrayOf(permission), PERMISSION_REQUEST_CODE)
            promise.resolve(false) // Notify JS that permission request is in progress
        }
    }

    @ReactMethod
    fun addContact(name: String, phoneNumber: String, promise: Promise) {
        val activity: Activity? = currentActivity

        if (activity == null) {
            promise.reject("ACTIVITY_NULL", "Activity is null")
            return
        }

        if (ContextCompat.checkSelfPermission(activity, Manifest.permission.WRITE_CONTACTS) != PackageManager.PERMISSION_GRANTED) {
            promise.reject("PERMISSION_DENIED", "Write contacts permission is required. Please request permission first.")
            return
        }

        try {
            val contentResolver = activity.contentResolver
            val operations = ArrayList<android.content.ContentProviderOperation>()

            val rawContactInsertIndex = operations.size
            operations.add(
                android.content.ContentProviderOperation.newInsert(ContactsContract.RawContacts.CONTENT_URI)
                    .withValue(ContactsContract.RawContacts.ACCOUNT_TYPE, null)
                    .withValue(ContactsContract.RawContacts.ACCOUNT_NAME, null)
                    .build()
            )

            // Insert the display name
            operations.add(
                android.content.ContentProviderOperation.newInsert(ContactsContract.Data.CONTENT_URI)
                    .withValueBackReference(ContactsContract.Data.RAW_CONTACT_ID, rawContactInsertIndex)
                    .withValue(ContactsContract.Data.MIMETYPE, ContactsContract.CommonDataKinds.StructuredName.CONTENT_ITEM_TYPE)
                    .withValue(ContactsContract.CommonDataKinds.StructuredName.DISPLAY_NAME, name)
                    .build()
            )

            // Insert the phone number
            operations.add(
                android.content.ContentProviderOperation.newInsert(ContactsContract.Data.CONTENT_URI)
                    .withValueBackReference(ContactsContract.Data.RAW_CONTACT_ID, rawContactInsertIndex)
                    .withValue(ContactsContract.Data.MIMETYPE, ContactsContract.CommonDataKinds.Phone.CONTENT_ITEM_TYPE)
                    .withValue(ContactsContract.CommonDataKinds.Phone.NUMBER, phoneNumber)
                    .withValue(ContactsContract.CommonDataKinds.Phone.TYPE, ContactsContract.CommonDataKinds.Phone.TYPE_MOBILE)
                    .build()
            )

            // Apply the operations
            contentResolver.applyBatch(ContactsContract.AUTHORITY, operations)

            promise.resolve(phoneNumber)
        } catch (e: Exception) {
            promise.reject("ERROR", e)
        }
    }
}

