// 校验真实中文姓名(2~20字汉字)
export function validateRealName(rule, value, callback) {
	const reg = /^[\u4e00-\u9fa5]{2,20}$/
	const errors = []
	if (value && reg.test(value) === false) {
		errors.push(new Error(`姓名格式不合法`, rule.field))
	}
	callback(errors)
}

// 校验用户名(字母数字下划线中文)
export function validateUserName(rule, value, callback) {
	const reg = /^[a-zA-Z\d_\u4e00-\u9fa5]{2,20}$/
	const errors = []
	if (value && reg.test(value) === false) {
		errors.push(new Error(`姓名格式不合法`, rule.field))
	}
	callback(errors)
}

// 校验手机号
export function validatePhone(rule, value, callback) {
	const reg = /^(13[0-9]|14[0-9]|15[0-9]|166|17[0-9]|18[0-9]|19[8|9])\d{8}$/
	const errors = []
	if (value && reg.test(value) === false) {
		errors.push(new Error(`手机号码输格式不合法`, rule.field))
	}
	callback(errors)
}

// 校验 Email
export function validateEmail(rule, value, callback) {
	const reg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
	const errors = []
	if (value && reg.test(value) === false) {
		errors.push(new Error(`邮箱地址格式不合法`, rule.field))
	}
	callback(errors)
}

// 校验身份证号(15位)
export function validateCardID15(rule, value, callback) {
	const reg = /^[1-9]\\d{7}((0\\d)|(1[0-2]))(([0|1|2]\\d)|3[0-1])\\d{3}$/
	const errors = []
	if (value && reg.test(value) === false) {
		errors.push(new Error(`身份证号码格式不合法`, rule.field))
	}
	callback(errors)
}

// 校验身份证号(18位)
export function validateCardID18(rule, value, callback) {
	const reg = /^[1-9]\\d{5}[1-9]\\d{3}((0\\d)|(1[0-2]))(([0|1|2]\\d)|3[0-1])\\d{3}([0-9]|X)$/
	const errors = []
	if (value && reg.test(value) === false) {
		errors.push(new Error(`身份证号码格式不合法`, rule.field))
	}
	callback(errors)
}

// 校验 IP-v4
export function validateIPv4(rule, value, callback) {
	const reg = /^(25[0-5]|2[0-4]\d|[0-1]?\d?\d)(\.(25[0-5]|2[0-4]\d|[0-1]?\d?\d)){3}$/
	const errors = []
	if (value && reg.test(value) === false) {
		errors.push(new Error(`IP-v4地址格式不合法`, rule.field))
	}
	callback(errors)
}

// 校验端口号(0一般作为保留端口，很少会用做输入，去掉0的正则表达式（不支持0）)
export function validatePort(rule, value, callback) {
	const reg = /^([1-9]|[1-5]\d{4}|6[1-4]\d{3}|65[1-4]\d{2}|655[1-2]\d|6553[1-5])$/
	const errors = []
	if (value && reg.test(value) === false) {
		errors.push(new Error(`端口号不合法`, rule.field))
	}
	callback(errors)
}

// 校验港澳台居民来往内地通行证号码
export function validateHMTCardID(rule, value, callback) {
	const reg = /^([A-Z]\d{6,10}(\(\w{1}\))?)$/
	const reg2 = /^\d{8}|^[a-zA-Z0-9]{10}|^\d{18}$/
	const errors = []
	if (value && (reg.test(value) === false || reg2.test(value) === false)) {
		errors.push(new Error(`港澳台居民来往内地通行证号码不合法`, rule.field))
	}
	callback(errors)
}

// 校验港澳居民来往内地通行证号码
export function validateHMCardID(rule, value, callback) {
	const reg = /^([A-Z]\d{6,10}(\(\w{1}\))?)$/
	const errors = []
	if (value && (reg.test(value) === false || reg2.test(value) === false)) {
		errors.push(new Error(`港澳居民来往内地通行证号码不合法`, rule.field))
	}
	callback(errors)
}

// 校验台湾居民来往内地通行证号码
export function validateTCardID(rule, value, callback) {
	const reg = /^\d{8}|^[a-zA-Z0-9]{10}|^\d{18}$/
	const errors = []
	if (value && reg.test(value) === false) {
		errors.push(new Error(`台湾居民来往内地通行证号码不合法`, rule.field))
	}
	callback(errors)
}

// 校验护照
export function validatePassPortCard(rule, value, callback) {
	const reg = /^([a-zA-z]|[0-9]){5,17}$/
	const errors = []
	if (value && reg.test(value) === false) {
		errors.push(new Error(`护照号码格式不合法`, rule.field))
	}
	callback(errors)
}

// 校验军官证
export function validateOfficerCardID(rule, value, callback) {
	const reg = /^[\u4E00-\u9FA5](字第)([0-9a-zA-Z]{4,8})(号?)$/
	const errors = []
	if (value && reg.test(value) === false) {
		errors.push(new Error(`军官证号码格式不合法`, rule.field))
	}
	callback(errors)
}

// 校验户口本
export function validateAccountCardID(rule, value, callback) {
	const reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
	const errors = []
	if (value && reg.test(value) === false) {
		errors.push(new Error(`户口本号码格式不合法`, rule.field))
	}
	callback(errors)
}

// 校验回乡证
export function validateReturnHomeCardID(rule, value, callback) {
	const reg = /(H|M)(\d{10})$/
	const errors = []
	if (value && reg.test(value) === false) {
		errors.push(new Error(`回乡证号码格式不合法`, rule.field))
	}
	callback(errors)
}
