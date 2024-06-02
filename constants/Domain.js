const localPath = `localhost:9092`;
const cdn = 'https://cdn.omicrm.com/';

export default {

    // base
    defaultSubDomain: 'sso',
    localPath, localRedirect: `http://omicrm.app.${localPath}`,
    cdn,

    oldUploadFile: `${cdn.replace('cdn', 'minio.infra')}crm/`,
    uploadFile: `${cdn}crm/`,
    common: 'https://aw6nfrdxcj.execute-api.us-east-1.amazonaws.com/prod/',
}; 