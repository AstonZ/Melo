package com.melo;
import android.util.Log;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class ReactRouter extends ReactContextBaseJavaModule{

    public ReactRouter(ReactApplicationContext reactContext){
        super(reactContext);
    }

    @Override
    public String getName(){
        return "ReactRouter";
    }

    @ReactMethod
    public void handelMsg(String msg){
        Log.i("React Msg", "Received Msg From RN: " + msg);
    }

}