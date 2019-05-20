
class Test {
    /**
     * Class representing a car Test object
     *
     * @param {string} date date of the car test
     * @param {string} time which hour
     * @param {string} time which place
     * @param {int} time phone contact number
     */
    constructor(date, time, place, phone) {
        this.date = date;
        this.time = time;
        this.place = place;
        this.phone = phone;
    }
}

module.exports = Test;
