git pull
git add .
git commit -am "deploy"
git push


echo "Configurando ambiente app cms"


-----------------------------------------------------------------------------------------
# - passo 1
rm -rf cmsapp.apk
-----------------------------------------------------------------------------------------
# - passo 2
 ionic cordova build android --release
-----------------------------------------------------------------------------------------
# - passo 3
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore debug.keystore /Users/danilo/projetos/torne-se/aulas/projeto-cms-comunidade/app-cms/platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk androiddebugkey
-----------------------------------------------------------------------------------------
## digitar password: cmsapp
-----------------------------------------------------------------------------------------
# - passo 4
/Users/danilo/Library/Android/sdk/build-tools/30.0.3/zipalign -v 4 /Users/danilo/projetos/torne-se/aulas/projeto-cms-comunidade/app-cms/platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk cmsapp.apk
-----------------------------------------------------------------------------------------
## instalar app no celular e ver o log de erro, conectar o celular no usb e destravar o celular
# - passo 5
 ~/platform-tools/adb install -r cmsapp.apk


git pull
git add .
git commit -am "deploy"
git push