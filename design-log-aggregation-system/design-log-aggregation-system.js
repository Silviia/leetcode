/**
 * @param {number} machines
 * @param {number} services
 */
var LogAggregator = function(machines, services) {
    // For each machine keep tracks of the logs
    this.machineLogs = [];
    for(let i = 0; i < machines; i += 1) {
         this.machineLogs[i] = new Map();
    }
    // For each service keep track of the logs
    this.serviceLogs = [];
    for(let i = 0; i < services; i += 1) {
        this.serviceLogs[i] = new Map();
    }
};

/** 
 * @param {number} logId 
 * @param {number} machineId 
 * @param {number} serviceId 
 * @param {string} message
 * @return {void}
 */
LogAggregator.prototype.pushLog = function(logId, machineId, serviceId, message) {
    this.machineLogs[machineId].set(logId, message);
    this.serviceLogs[serviceId].set(logId, message);
};

/** 
 * @param {number} machineId
 * @return {number[]}
 */
LogAggregator.prototype.getLogsFromMachine = function(machineId) {
    const logs = [];
    for(const key of this.machineLogs[machineId].keys()) {
        logs.push(key);
    }
    return logs;
};

/** 
 * @param {number} serviceId
 * @return {number[]}
 */
LogAggregator.prototype.getLogsOfService = function(serviceId) {
    const logs = [];
    for(const key of this.serviceLogs[serviceId].keys()) {
        logs.push(key);
    }
    return logs;
};

/** 
 * @param {number} serviceId 
 * @param {string} searchString
 * @return {string[]}
 */
LogAggregator.prototype.search = function(serviceId, searchString) {
    const result = [];
    for(const message of this.serviceLogs[serviceId].values()) {
        if (message.includes(searchString)) {
            result.push(message);
        }
    }
    return result;
};

/** 
 * Your LogAggregator object will be instantiated and called as such:
 * var obj = new LogAggregator(machines, services)
 * obj.pushLog(logId,machineId,serviceId,message)
 * var param_2 = obj.getLogsFromMachine(machineId)
 * var param_3 = obj.getLogsOfService(serviceId)
 * var param_4 = obj.search(serviceId,searchString)
 */