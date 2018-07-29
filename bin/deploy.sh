sshpass -p $DEPLOY_PASS scp -o stricthostkeychecking=no -r ./dist $DEPLOY_USER@182.92.153.2:/root/workspace/muyake/mygames/flappybird
echo 'deploy-origin done!'