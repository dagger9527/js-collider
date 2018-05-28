// 存放所有碰撞点的数组
point_arr = []

// 定义碰撞信息类
class ColliderPoint {
    constructor(x, y, w, h = w) {
        this._x = x
        this._y = y
        this._width = w
        this._height = h
        this._flag = true
        point_arr.push(this)
        check_collider()
    }

    set x(value) {
        this._x = value
        check_collider()
    }

    get x() {
        return this._x
    }

    set y(value) {
        this._y = value
        check_collider()
    }

    get y() {
        return this._y
    }

    set width(value) {
        this._width = value
        check_collider()
    }

    get width() {
        return this._width
    }

    set height(value) {
        this._height = value
        check_collider()
    }

    get height() {
        return this._height
    }

    /**
     * 这三个方法是用来让用户重写的
     * onCollisionEnter: 监听第一次碰撞
     * onCollisionStay: 一直监听碰撞
     * onCollisionExit: 监听碰撞退出
     */
    onCollisionEnter() {

    }

    onCollisionStay() {

    }

    onCollisionExit() {

    }

    // 下面这三个方法对用户重写的方法进行调用
    collisionEnter() {
        if (this._flag) {
            this.onCollisionEnter()
            this._flag = false
        }
    }

    collisionStay() {
        this.onCollisionStay()
    }

    collisionExit() {
        if (!this._flag) {
            this.onCollisionExit()
            this._flag = true
        }
    }

}

/**
 *  检查是否发生了碰撞
 *  遍历碰撞点数组point_arr中所有的位置信息和width和height来判断是否碰撞
 *  当每次修改ColliderPoint类中的x、y、width、height属性也会触发这个函数
 */
function check_collider() {
    for (var i = 0; i < point_arr.length; i++) {
        for (var j = i + 1; j < point_arr.length; j++) {
            let p1 = point_arr[i], p2 = point_arr[j]
            if (p2.x >= p1.x && p1.x + p1.width >= p2.x && p1.y < p2.y + p2.width && p1.y + p1.width > p2.y) {
                // 在这里做碰撞触发后的事
                p1.collisionEnter()
                p1.collisionStay()
                p2.collisionEnter()
                p2.collisionStay()
            } else if (p1.x >= p2.x && p2.x + p2.width >= p1.x && p2.y < p1.y + p1.width && p2.y + p2.width > p1.y) {
                // 在这里做碰撞触发后的事
                p1.collisionEnter()
                p1.collisionStay()
                p2.collisionEnter()
                p2.collisionStay()
            } else if (p2.y >= p1.y && p1.y + p1.height >= p2.y && p1.x < p2.x + p2.height && p1.x + p1.height > p2.x) {
                // 在这里做碰撞触发后的事
                p1.collisionEnter()
                p1.collisionStay()
                p2.collisionEnter()
                p2.collisionStay()
            } else if (p1.y >= p2.y && p2.y + p2.height >= p1.y && p2.x < p1.x + p1.height && p2.x + p2.height > p1.x) {
                // 在这里做碰撞触发后的事
                p1.collisionEnter()
                p1.collisionStay()
                p2.collisionEnter()
                p2.collisionStay()
            } else {
                p1.collisionExit()
                p2.collisionExit()
            }
        }
    }
}

