# js-collider
通过继承ColliderPoint类并实现其中三个方法
``` js
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
```
例如:
      ``` js
           // 继承ColliderPoint类
          class A extends ColliderPoint {
              // 开始碰撞
              onCollisionEnter() {
                  console.log('collisionEnter')
              }
              // 持续碰撞
              onCollisionStay() {
                  console.log('collisionStay')
              }
              // 碰撞退出
              onCollisionExit() {
                  console.log('collisionExit')
              }
          }
          // 将x、y轴的坐标和width和height传入构造方法得到实例
          let point = new A(100 - offset, 100 - offset, block_w)
      ```
      
你在修改A的实例的x、y坐标和height、width的时候，它会自动调用check_collider这个检查函数，判断是否碰撞。如是，则并调用这三个方法

## 此插件今后还会继续更新，感谢各位的支持
