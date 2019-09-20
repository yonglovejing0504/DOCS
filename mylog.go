package mylog

import (
    "fmt"
    "log"
    "os"
    "time"
)

var (
    logi *log.Logger
    logd *log.Logger
    loge *log.Logger
    logw *log.Logger
    f    *os.File
)

var logLevel="debug"


func Init() {
    t := time.Now().Format("2006-01-02")
    name := "app_" + t + ".log"
    var e error
    f, e = os.OpenFile(name, os.O_RDWR|os.O_CREATE|os.O_APPEND, 0666)
    if e != nil {
        fmt.Println("error:", e.Error())
    }
    
    logi = log.New(f, "[INFO ] ", log.Ldate|log.Ltime|log.Lmicroseconds|log.Lshortfile)
    logd = log.New(f, "[DEBUG] ", log.Ldate|log.Ltime|log.Lmicroseconds|log.Lshortfile)
    loge = log.New(f, "[ERROR] ", log.Ldate|log.Ltime|log.Lmicroseconds|log.Lshortfile)
    logw = log.New(f, "[WARN ] ", log.Ldate|log.Ltime|log.Lmicroseconds|log.Lshortfile)
}
func Close() {
    f.Close()
}



func LogI(v ...interface{}) {
	if logLevel=="info"{
		logi.Println(v...)
	}
}


func LogD(v ...interface{}) {
	if logLevel=="debug"{
		logd.Println(v...)
	}    
}


func LogE(v ...interface{}) {
	if logLevel=="error"{
		logw.Println(v...)
	}
}


func LogW(v ...interface{}) {

	if logLevel=="warn"{
		logw.Println(v...)
	}
}
