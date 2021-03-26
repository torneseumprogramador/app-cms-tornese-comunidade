ionic cordova resources


# - passo 0 - quando não tem a chave
Gerar assinatura
-----------------------------------------------------------------------------------------
keytool -genkey -v -keystore debug.keystore -storepass cmsapp -alias androiddebugkey -keypass cmsapp -keyalg RSA -keysize 2048 -validity 10000

-----------------------------------------------------------------------------------------
# - passo 1
rm -rf cmsapp.apk
-----------------------------------------------------------------------------------------
# - passo 2
 ionic cordova build android --release
-----------------------------------------------------------------------------------------
# - passo 3
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore debug.keystore /Users/romulofireman/cmsapp/app-cmsapp/platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk androiddebugkey
-----------------------------------------------------------------------------------------
## digitar password: cmsapp
-----------------------------------------------------------------------------------------
# - passo 4
/Users/romulofireman/Library/Android/sdk/build-tools/28.0.3/zipalign -v 4 /Users/romulofireman/cmsapp/app-cmsapp/platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk cmsapp.apk
-----------------------------------------------------------------------------------------
## instalar app no celular e ver o log de erro, conectar o celular no usb e destravar o celular
# - passo 5
 ~/platform-tools/adb install -r cmsapp.apk


cordova plugin add ionic-plugin-deeplinks --variable URL_SCHEME=cmsapp365 --variable DEEPLINK_SCHEME=http --variable DEEPLINK_HOST=cmsapp365.net --variable ANDROID_PATH_PREFIX=/


cordova plugin add ionic-plugin-deeplinks --variable URL_SCHEME=bets1 --variable DEEPLINK_SCHEME=http --variable DEEPLINK_HOST=bets1.pro.br --variable ANDROID_PATH_PREFIX=/


ionic cordova platform remove android
ionic cordova platform add android