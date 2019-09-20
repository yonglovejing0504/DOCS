package main
import (

		"./mylog"
)


func main() {
	mylog.Init()
	mylog.LogI("2222")
	mylog.LogD("3333")
	mylog.LogE("4444")
	mylog.LogW("5555")
}