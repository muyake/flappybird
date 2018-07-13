npm run build
sshpass -p $DEPLOY_PASS scp -o stricthostkeychecking=no -r ./dist $DEPLOY_USER@182.92.153.2:/root/workspace/muyake/typescript
echo 'deploy-origin done!'