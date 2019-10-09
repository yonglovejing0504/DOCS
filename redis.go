package main
import (
  "time"
  "fmt"
  "github.com/go-redis/redis"

)

var Client *redis.Client



func main() {

fmt.Println("-----------------------welcome to StringDemo-----------------------")
  RedisSetString("name", "x", 100)
  s, b := RedisGetString("name")
  fmt.Println(s, b)
fmt.Println("-----------------------welcome to StringDemo-----------------------")

fmt.Println("-----------------------welcome to ListDemo-------------------------")

	listkey:="listkey"
	Client.Del(listkey)
    listVal := []string{"test1", "test2", "test3"}
	
  RedisSetList(listkey, listVal, 100)
listValtmp:=RedisGetList(listkey)

  fmt.Println(listValtmp)

fmt.Println("-----------------------welcome to ListDemo-------------------------")

}



/*
Redisクライアント初期化
*/
func init() {
  Client = redis.NewClient(&redis.Options{
    Addr:     "127.0.0.1:6379",
    PoolSize:   1000,
    ReadTimeout: time.Millisecond * time.Duration(100),
    WriteTimeout: time.Millisecond * time.Duration(100),
    IdleTimeout: time.Second * time.Duration(60),
  })
  _, err := Client.Ping().Result()
  if err != nil {
    panic("init redis error")
  } else {
    fmt.Println("init redis ok")
  }
}


/*
Redis  SetString
*/
func RedisSetString(key string, val string, expTime int32) {
  Client.Set(key, val, time.Duration(expTime) * time.Second)
}

/*
Redis  GetString
*/
func RedisGetString(key string) (string, bool) {
  r, err := Client.Get(key).Result()
  if err != nil {
    return "", false
  }
  return r, true
}

/*
Redis  SetList
*/
func RedisSetList(key string, listVal []string, expTime int32) {


    err := Client.RPush(key, listVal).Err()
    if err != nil {
        fmt.Println("redis.Client.RPush Error:", err)
    }

}

/*
Redis  GetList
*/
func RedisGetList(key string)(listVal []string) {

    // Get by lrange
    listVal, err := Client.LRange(key, 0, -1).Result()
    if err != nil {
        fmt.Println("redis.Client.LRange Error:", err)
    }
    fmt.Println(listVal)
    return listVal


}