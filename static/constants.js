// IP地址
const HOST = 'http://117.34.95.9';
// 后台服务端口
const SERVER_PORT = "58051";

// CAS单点登录端口
const CAS_PORT = "8080";

// 地图服务端口
const MAP_PORT = "6880";
// 默认服务地址前缀
const DEFAULT_URL = HOST + ":" + SERVER_PORT;
// 默认地图服务地址前缀
const MAP_URL = HOST + ":" + MAP_PORT;
// CAS默认地址
const CAS_URL = HOST + ":" + CAS_PORT;

export default {
    HOST: HOST,
    // 系统名称
    SYSTEM_NAME: "屠宰场管理系统",
    // 本地缓存过期时间，默认30分钟
    SESSION_LIMIT: 30,
    // CAS认证注销地址
    CAS_LOGOUT_URL: CAS_URL + "/cas/logout",
    // 地图WMS服务地址
    MAP_WMS_URL: MAP_URL + "/geoserver/qhOracle/wms",
    // 民宗项目基础信息后台地址
    SERVER_URL: DEFAULT_URL,
    // 用户头像地址
    IMAGE_USER_URL: DEFAULT_URL + "/permission/user/photo/",
    // 附件上传地址
    UPLOAD_URL: DEFAULT_URL + "/fastdfs/file/upload/nomark",
    // 多附件上传地址
    MULTI_UPLOAD_URL: DEFAULT_URL + "/fastdfs/file/multiFile",
    // 附件删除地址
    DELETE_FILE_URL: DEFAULT_URL + "/fastdfs/file/delete",
    // 附件读取地址
    READ_FILE_URL: DEFAULT_URL + "/fastdfs/file/file",
    // 支持上传的图片附件【JPG和PNG】
    SUPPORT_IMAGE_TYPE: ["image/jpeg", "image/png"],
    // 附件图片文件类型
    MEDIA_TYPE_IMAGE: ["png", "jpg"],
    // 附件视频文件类型
    MEDIA_TYPE_VIDEO: ["mp4"],
    // 附件音频文件类型
    MEDIA_TYPE_AUDIO: ["m4a"]
}