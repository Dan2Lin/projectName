class Engine {
  private param1: string;
  private param2: string;
  constructor(param1 , param2) {
    this.param1 = param1;
    this.param2 = param2;
  }
}
class Tire {
  private param1: string;
  private param2: string;
  constructor(param1 , param2) {
    this.param1 = param1;
    this.param2 = param2;
  }
}

export class Car {
 /* private Engine: any;
  private tire: any;*/
  /*constructor() {
    const p1 = 123;
    const p2 = 345;
    const p3 = 1;
    const p4 = 4;
    /!*
    * 第一种写法:Car类依赖于Engine和Luntai类,每次需要手动的实例化类，
    * 对外部类的依赖太大，形成了一种紧耦合
    *!/
    this.Engine = new Engine(p1 , p2);
    this.tire = new Tire(p3 , p4);
  }*/
 /*
  * 第二种写法:这样就解决了car类的依赖问题，car本身不会存在变化，把依赖的类移出到参数部分
  */
  constructor(public engine: Engine, public tire: Tire) {
  }
  drive() {
    console.log('滴滴滴，开车了，快上车~');
  }
}

/*const myCar = new Car();*/

/*
但是第二种会对car的消费者存在依赖问题,比如下面，如果引擎变化,第一个参数需要变成下面②的形式，我们还需要解决car的消费者依赖的问题
① const myCar1 = new Car(new Engine(), new Tire());
② const myCar2 = new Car(new Engine2(public number:Number),new Tire());*/

/*
* 对于上面的进度，我们测试的时候方便了很多,可以使用mock对象动态的生成参数，如下：
* class MockEngine extends Engine{
*    number:23;
* }
* class MockTire extend Tire{
*    maker:"zhangsan";
* }
* ③ const myCar = new Car(new MockEngine(),new MockTire());
* */

  /*解决car的消费者的问题:
  测试的时候方便，但是对于消费者mycar来说，要想创建一辆车，必须创建三个类，Car,Engine,Tire,这时候需要写一个巨类
  的工厂方法来实现，如下：
 class carFactory {
   createCar() {
     let car = new Car(this.createEngine() , this.createTire());
     car.description = 'BWM5系震撼上市';
     return car;
   }
   createEngine() {
     return new Engine();
   }
   createTire() {
     return new Tire();
   }
 }
 现在只是三个类，还不算太糟糕，如果在真实的环境中，一辆车可以来的因素可能非常多，那这个类将变得特别复杂，到时候创建
 这个巨型的类将变得特别复杂，因此我们希望能有一个地方我只需要传入一个Car变可以给我返回一个car，而我本身不需要关系Engine
 如何创建，Tire如何创建，比如下面：
    let car = Injector.get(Car);
 OK!只需要这一句就可以获得一个car.
 这里的注入器就是框架能提供给我们的。
 */

  /*
  angualr的注入器框架:
  userSerive服务的使用：

  1.使用@Injectable()标明这是一个可以被注入器实例化的对象
  2.在provider提供器中声明这个服务
  3.在构造函数中请求这些服务
  */







