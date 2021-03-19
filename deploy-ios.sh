git pull
git add .
git commit -am "deploy"
git push


echo "Configurando ambiente app cms"


# ionic cordova plugin add cordova-plugin-ionic-webview --save

# NSMotionUsageDescription = Acesso ao acelerometro para utlizar sistema em modo retrato
# NSLocationAlwaysUsageDescription = Uso do GPS para loclização do usuário no aplicativo
# NSLocationWhenInUseUsageDescription = Uso do GPS para loclização do usuário no aplicativo
# NSPhotoLibraryUsageDescription = Uso de galeria para enviar fotos nos cadastros de lojas
# NSCameraUsageDescription = Uso de câmera para enviar fotos nos cadastros de lojas


# echo "Removendo ios"
# cordova platform remove ios

# echo "Adicionando ios"
# cordova platform add ios

# echo "Gerando resources"
# ionic cordova resources


echo "Passo 1 build iphone"
ionic cordova build ios --release

echo "Passo 2 prepare iphone"
cordova prepare ios


# password: app_pap


git pull
git add .
git commit -am "deploy"
git push