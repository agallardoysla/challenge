cd ios; pod deintegrate;
watchman watch-del-all; 
rm -rf $TMPDIR/react-native-packager-cache-; 
rm -rf $TMPDIR/metro-bundler-cache-; 
rm -rf node_modules/;
yarn install;
cd ios; pod install;
cd ..;
cd android; ./gradlew clean; cd ..;
react-native run-android;
# react-native run-ios;