package com.demo 
import android.content.Intent
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.Promise
import com.demo.LivelinessActivity
class LivelinessModule(private val reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
    
    override fun getName() = "LivelinessModule" 
    @ReactMethod
    fun startLivelinessDetection(promise: Promise) {
        val activity = currentActivity
        if (activity == null) {
            promise.reject("ACTIVITY_NULL", "Activity is null")
            return
        }
        try {
            val intent = Intent(activity, LivelinessActivity::class.java)
            activity.startActivity(intent)
            promise.resolve(true)
        } catch (e: Exception) {
            promise.reject("ERROR", e.message)
        }
    }
}