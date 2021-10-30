// 校验真实中文姓名（2 - 20 位汉字）
export const validateRealName = (rule, value, callback) => {
  const reg = /^[\u4e00-\u9fa5]{2,20}$/;
  const errors = [];
  if (value && reg.test(value) === false) {
    errors.push(new Error(`姓名格式不符`, rule.field));
  }
  callback(errors);
};

// 校验用户名（字母数字下划线中文 2 - 20 位）
export const validateUserName = (rule, value, callback) => {
  const reg = /^[a-zA-Z\d_\u4e00-\u9fa5]{2,20}$/;
  const errors = [];
  if (value && reg.test(value) === false) {
    errors.push(new Error(`用户名格式不符`, rule.field));
  }
  callback(errors);
};

// 校验手机号
export const validatePhone = (rule, value, callback) => {
  const reg = /^(13[0-9]|14[0-9]|15[0-9]|166|17[0-9]|18[0-9]|19[5|8|9])\d{8}$/;
  const errors = [];
  if (value && reg.test(value) === false) {
    errors.push(new Error(`手机号码格式不符`, rule.field));
  }
  callback(errors);
};

// 校验 Email
export const validateEmail = (rule, value, callback) => {
  const reg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
  const errors = [];
  if (value && reg.test(value) === false) {
    errors.push(new Error(`邮箱地址格式不符`, rule.field));
  }
  callback(errors);
};

// 校验 QQ 号（5  至 11 位数字）
export const validateQQNum = (rule, value, callback) => {
  const reg = /^[1-9][0-9]{4,10}$/;
  const errors = [];
  if (value && reg.test(value) === false) {
    errors.push(new Error(`QQ号格式不符`, rule.field));
  }
  callback(errors);
};

// 校验 微信 号（6 至 20 位，以字母开头 + 字母，数字，减号，下划线）
export const validateWeChatNum = (rule, value, callback) => {
  const reg = /^[a-zA-Z]([-_a-zA-Z0-9]{5,19})+$/;
  const errors = [];
  if (value && reg.test(value) === false) {
    errors.push(new Error(`微信号格式不符`, rule.field));
  }
  callback(errors);
};

// 校验车牌号
export const validateLicensePlateNum = (rule, value, callback) => {
  const reg =
    /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/;
  const errors = [];
  if (value && reg.test(value) === false) {
    errors.push(new Error(`车牌号格式不符`, rule.field));
  }
  callback(errors);
};

// 校验颜色十六进制
export const validateRGBHex = (rule, value, callback) => {
  const reg = /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/;
  const errors = [];
  if (value && reg.test(value) === false) {
    errors.push(new Error(`颜色十六进制格式不符`, rule.field));
  }
  callback(errors);
};

// 校验 url
export const validateUrl = (rule, value, callback) => {
  const reg = /^((https?|ftp|file):\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
  const errors = [];
  if (value && reg.test(value) === false) {
    errors.push(new Error(`url 地址格式不符`, rule.field));
  }
  callback(errors);
};

// 校验 IP-v4
export const validateIPv4 = (rule, value, callback) => {
  const reg = /^(25[0-5]|2[0-4]\d|[0-1]?\d?\d)(\.(25[0-5]|2[0-4]\d|[0-1]?\d?\d)){3}$/;
  const errors = [];
  if (value && reg.test(value) === false) {
    errors.push(new Error(`IP-v4 地址格式不符`, rule.field));
  }
  callback(errors);
};

// 校验 IP-v6
export const validateIPv6 = (rule, value, callback) => {
  const reg =
    /(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))/;
  const errors = [];
  if (value && reg.test(value) === false) {
    errors.push(new Error(`IP-v6 地址格式不符`, rule.field));
  }
  callback(errors);
};

// 校验端口号(0一般作为保留端口，很少会用做输入，去掉0的正则表达式（不支持0）)
export const validatePort = (rule, value, callback) => {
  const reg =
    /^((6553[0-5])|(655[0-2][0-9])|(65[0-4][0-9]{2})|(6[0-4][0-9]{3})|([1-5][0-9]{4})|([0-5]{0,5})|([0-9]{1,4}))$/;
  const errors = [];
  if (value && reg.test(value) === false) {
    errors.push(new Error(`端口号格式不符`, rule.field));
  }
  callback(errors);
};

// 校验设备 MAC 地址
export const validateMacAddress = (rule, value, callback) => {
  const reg = /^[a-fA-F0-9]{2}(:[a-fA-F0-9]{2}){5}$/;
  const errors = [];
  if (value && reg.test(value) === false) {
    errors.push(new Error(`MAC 地址格式不符`, rule.field));
  }
  callback(errors);
};

// 校验中国地区邮政编码（6位数字）
export const validateChinaZipCode = (rule, value, callback) => {
  const reg = /^[1-9]\d{5}(?!\d)$/;
  const errors = [];
  if (value && reg.test(value) === false) {
    errors.push(new Error(`邮政编码格式不符`, rule.field));
  }
  callback(errors);
};

// 校验身份证号(15位)
export const validateCardID15 = (rule, value, callback) => {
  const reg = /^[1-9]\\d{7}((0\\d)|(1[0-2]))(([0|1|2]\\d)|3[0-1])\\d{3}$/;
  const errors = [];
  if (value && reg.test(value) === false) {
    errors.push(new Error(`身份证号码格式不符`, rule.field));
  }
  callback(errors);
};

// 校验身份证号(18位)
export const validateCardID18 = (rule, value, callback) => {
  const reg = /^[1-9]\\d{5}[1-9]\\d{3}((0\\d)|(1[0-2]))(([0|1|2]\\d)|3[0-1])\\d{3}([0-9]|X)$/;
  const errors = [];
  if (value && reg.test(value) === false) {
    errors.push(new Error(`身份证号码格式不符`, rule.field));
  }
  callback(errors);
};

// 校验港澳台居民来往内地通行证号码
export const validateHMTCardID = (rule, value, callback) => {
  const reg = /^([A-Z]\d{6,10}(\(\w{1}\))?)$/;
  const reg2 = /^\d{8}|^[a-zA-Z0-9]{10}|^\d{18}$/;
  const errors = [];
  if (value && (reg.test(value) === false || reg2.test(value) === false)) {
    errors.push(new Error(`港澳台居民来往内地通行证号码格式不符`, rule.field));
  }
  callback(errors);
};

// 校验港澳居民来往内地通行证号码
export const validateHMCardID = (rule, value, callback) => {
  const reg = /^([A-Z]\d{6,10}(\(\w{1}\))?)$/;
  const errors = [];
  if (value && (reg.test(value) === false || reg2.test(value) === false)) {
    errors.push(new Error(`港澳居民来往内地通行证号码格式不符`, rule.field));
  }
  callback(errors);
};

// 校验台湾居民来往内地通行证号码
export const validateTCardID = (rule, value, callback) => {
  const reg = /^\d{8}|^[a-zA-Z0-9]{10}|^\d{18}$/;
  const errors = [];
  if (value && reg.test(value) === false) {
    errors.push(new Error(`台湾居民来往内地通行证号码格式不符`, rule.field));
  }
  callback(errors);
};

// 校验护照
export const validatePassPortCard = (rule, value, callback) => {
  const reg = /^([a-zA-z]|[0-9]){5,17}$/;
  const errors = [];
  if (value && reg.test(value) === false) {
    errors.push(new Error(`护照号码格式不符`, rule.field));
  }
  callback(errors);
};

// 校验军官证
export const validateOfficerCardID = (rule, value, callback) => {
  const reg = /^[\u4E00-\u9FA5](字第)([0-9a-zA-Z]{4,8})(号?)$/;
  const errors = [];
  if (value && reg.test(value) === false) {
    errors.push(new Error(`军官证号码格式不符`, rule.field));
  }
  callback(errors);
};

// 校验户口本
export const validateAccountCardID = (rule, value, callback) => {
  const reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
  const errors = [];
  if (value && reg.test(value) === false) {
    errors.push(new Error(`户口本号码格式不符`, rule.field));
  }
  callback(errors);
};

// 校验回乡证
export const validateReturnHomeCardID = (rule, value, callback) => {
  const reg = /(H|M)(\d{10})$/;
  const errors = [];
  if (value && reg.test(value) === false) {
    errors.push(new Error(`回乡证号码格式不符`, rule.field));
  }
  callback(errors);
};

// 校验 uuid
export const validateUuid = (rule, value, callback) => {
  const reg =
    /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/;
  const errors = [];
  if (value && reg.test(value) === false) {
    errors.push(new Error(`uuid 格式不符`, rule.field));
  }
  callback(errors);
};
