let status = []

export var CartStatus = (function () {
    function initStatus() {
        status = []
    }

    function Added(data) {
        status = [...status, data]
    }

    function Deleted(data) {
        status = data
    }

    function getStatus() {
        console.log(status)
        return status
    }

    return { // public interface
        initStatus,
        Added,
        Deleted,
        getStatus
    };
})();