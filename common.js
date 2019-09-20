

■■■■■■以下は共通メソッド(データ類型：number,boolean,string)

	/**
		携帯番号設定
	**/
	function isPhoneNumber(phoneno: String) {
	    var reg =/^0?1[3|4|5|6|7|8][0-9]\d{8}$/;
	    return reg.test(phoneno);
	}

export {
  isPhoneNumber,
  loadMaps,
};


２．呼出し方法
	import { getparam } from './common';

	var tmp= getparam('test')
	alert(tmp)


■■■■■■常数
	
	１．実装方法
	const SCHEDULE_ICONS = {
	  day1: {
	    default: require("./schedule/img/tab-icon/1/default.png"),
	    active: require("./schedule/img/tab-icon/1/active.png")
	  },
	  day2: {
	    default: require("./schedule/img/tab-icon/2/default.png"),
	    active: require("./schedule/img/tab-icon/2/active.png")
	  }
	};

	２．呼出し方法
	let scheduleIcon = SCHEDULE_ICONS.day1.default; // day 1 and fallback



■■■■■■OS判断
import {  Platform} from "react-native";

  render() {
    if (Platform.OS === "ios") {
      return this.renderIOS();
    } else {
      return this.renderAndroid();
    }
  }
  renderIOS() {
    return (
      <ScrollView
。。。
      </ScrollView>
    );
  }


■■■■■■自定義コントロール

１．実装方法
import React from "react";
import { Image, PixelRatio } from "react-native";

/**
* ==============================================================================
* <ProfilePicture />
* ------------------------------------------------------------------------------
* @param {String} userID Facebook user ID
* @param {Number} size The desired profile photo size
* @return {ReactElement}
* ==============================================================================
*/
/* constants ================================================================ */

const LOGO_OFFSET_RIGHT = 5,
  LOGO_OFFSET_BOTTOM = 7,
  PROFILE_PICTURE_SIZE = 54,
  CONTAINER_WIDTH = PROFILE_PICTURE_SIZE + LOGO_OFFSET_RIGHT,
  CONTAINER_HEIGHT = PROFILE_PICTURE_SIZE + LOGO_OFFSET_BOTTOM;

/* =============================================================================
<MessengerChatHead />
============================================================================= */
class ProfilePicture extends React.Component {
  props: {
    userID: string,
    size: number
  };

  render() {
    const { userID, size } = this.props;
    const scaledSize = size * PixelRatio.get();
    const graphURL = `https://graph.facebook.com/${userID}/picture?width=${scaledSize}&height=${scaledSize}`;
    return (
      <Image
        source={{ uri: graphURL }}
        style={{
          width: size,
          height: size,
          borderRadius: size / 2
        }}
      />
    );
  }
}

module.exports = ProfilePicture;


２．呼出し方法
import ProfilePicture from "./ProfilePicture";

<ProfilePicture userID={user.id} size={PROFILE_PICTURE_SIZE} />



■TextInput

<TextInput style={{height:40, width:300}} placeholder = {'携帯NOを入力してください'} maxLength = {11} keyboardType = {'number-pad'} clearButtonMode = {'while-editing'}></TextInput>
<TextInput style={{height:40, width:300}} secureTextEntry = {true} placeholder = {'パスワードを入力してください'} maxLength = {3} clearButtonMode = {'while-editing'}></TextInput>


react-native-hide-show-password-input






■GO　－　MD5
 
import (
	"crypto/md5"
	"crypto/rand"
	"crypto/rsa"
	"crypto/x509"
	"encoding/base64"
	"encoding/hex"
	"encoding/pem"
	"errors"
)
 
const (
	base64Table = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
)
 
var coder = base64.NewEncoding(base64Table)


 func Md5Encrypt(data string) string {
	md5Ctx := md5.New()                            //md5 init
	md5Ctx.Write([]byte(data))                     //md5 updata
	cipherStr := md5Ctx.Sum(nil)                   //md5 final
	encryptedData := hex.EncodeToString(cipherStr) //hex_digest
	return encryptedData
}



http://kimagureneet.hatenablog.com/entry/2016/06/08/020458

AsyncStorage
https://cloud.tencent.com/developer/section/1373126
★
https://www.cnblogs.com/huangjialin/p/6245122.html

■

https://www.jianshu.com/p/abf4e19f245c
説明API
https://reactnative.cn/docs/next/asyncstorage.html


import {  AsyncStorage } from 'react-native';


_storeData = async () => {
  try {
    await AsyncStorage.setItem('@MySuperStore:key', 'I like to save it.');
  } catch (error) {
    // Error saving data
  }
}

_retrieveData = async () => {
  try {
    const value = await AsyncStorage.getItem('@MySuperStore:key');
    if (value !== null) {
      // We have data!!
      alert(value);
    }
   } catch (error) {
     // Error retrieving data
   }
}




            this._storeData();
            this._retrieveData();