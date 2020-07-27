# 一、idea快捷键

Alt + Enter  导入包，自动修正代码

ctrl  +Y 删除光标所在行

ctrl + D 复制一行，到下一行

ctrl + alt + L 格式化代码

ctrl + shift + / 注释

alt + ins 自动生成代码

alt + shift + 上下箭头  移动当前代码行

# 二、方法

## 2.1 定义

方法其实就是若干语句的功能集合

## 2.2 方法包含的内容

 参数（原料）：就是进入方法的数据

返回值（产出物）：就是从方法中出来的数据

## 2.3 定义方法的完整格式

```java
修饰符  返回值类型  方法名称（参数类型 参数值， ...） {

	方法体

	return  返回值

}
```



- 修饰符：比如public static
- 返回值类型：也就是方法最终产出的数据是什么类型
- 方法名称：方法的名字，规则跟变量一样使用小驼峰
- 参数类型：进入方法的数据是什么类型
- 参数名称：进入方法的数据对应的名称，多个参数逗号隔开
- 方法体：方法需要做的事情
- return ：停止当前方法，将后面的内容返回给调用处， return返回的数据必须和返回值类型一致

## 2.4 方法重载

对于功能类似的方法来说，因为参数列表不一样，却需要记住这么多不同的方法名称，太麻烦

### 定义（overload）：多个方法的名称一样，但是参数列表不一样

好处：只需要记住一个方法名称，却可以实现类似的多个功能

### 重点

方法重载与下列因素相关

1、 参数个数不同

2、 参数类型不同

3、 参数的多类型顺序不同



方法重载与下列因素无关

1、与参数名称无关

2、 与方法的返回值无关



# 三、数组

## 3.1 数组的概念：是一种容器，可以同时存放多个数据值

## 3.2 数组的特点

1、 数组是一种引用数据类型

2、 数组当中有多个数据，类型必须统一

3、 数组的长度在程序运行期间不可改变

## 3.3 两种常见的数组初始化

1、动态初始化（指定长度）

2、 静态初始化（指定内容）

动态初始化数组的格式

数据类型 [] 数组名称 = new 数据类型 [ 数组长度 ]



静态初始化 直接指定元素

数据类型 []  数组名称 = new [] {5, 15 25}

省略格式 数据类型 [] 数组名 = {2, 20, 30}

## 3.4 数组的默认值

整数类型，默认值是0

浮点类型，默认值是 0.0

字符类型，默认值是 ‘\u000’

布尔类型，默认值是false

引用类型，默认值是 null

## java的内存

java中的内存划分为五个部分

### **1、栈内存（Stack）**

​	**<u>存放的都是方法中的局部变量，方法的运行一定在栈内存中，**</u>

​		<u>**局部变量：方法的参数，或者是方法{}内部的变量**</u>

​		<u>**作用域：一旦超出作用域，立即从栈内存中消失</u>**

### **<u>2、堆内存（heap）**</u>

​	<u>**凡是new出来的东西，都在堆内存中**</u>

​		<u>**堆内存中存放的东西都有一个地址值： 16进制**</u>

​		<u>**堆内存中的数据，都有默认值**</u>

### <u>3、方法区（method area ）：</u>

​	<u>储存class的相关信息，包含方法的信息</u>

### 4、本地方法栈 ：与操作信息相关

### 5、寄存器 ：与cpu相关

# 四、面向对象

## 4.1 面向对象与面向过程

### 1、 面向过程：当需要实现一个功能的时候，每一个具体的步骤都需要亲历亲为，详细处理每一个细节

### 2、 面向对象： 当需要实现一个功能的时候，不关心具体的实现步骤，而是找一个已经具有该功能的人，来帮我做事

### 案例：

洗衣服：

- 面向过程：把衣服脱下来  -> 放在盆子里 - 》 放洗衣液 - 》 洗 -》 晾晒
- 面向对象： 把衣服脱下来 - 》 放进洗衣机 - 》 晾晒

区别：

- 面向过程：强调步骤
- 面向对象：强调对象

特点：将复杂的事情简单化，并将我们从执行者变成指挥者

#### 三大特征：封装，继承，多态

## 4.2 类和对象

### 1、什么是类

类：是一组相关属性和行为的集合，可以看作是一类事物的模板，使用事物的属性特征和行为特征来描述该类事物

描述一类事物

- 属性：就是该事物的状态信息
- 行为：就是该事物能做什么

举例：小猫

​	属性： 名字，体重，颜色

​	行为：走，跑，叫

### 2、什么是对象

 	对象：是一类事物的具体体现，对象是类的一个实例，必然具备该类事物的属性和行为

### 3、类和对象的关系

- 类是对一类事物的描述，是抽象的

- 对象是一类事物的实例，是具体的

- 类是对象的模板，对象是类的实体

  比如  手机设计图 就是类  这一个手机就是 对象

### 4、类的定义

现实世界的一类事物：

​	属性：事物的状态信息

​	行为：事物能做什么

java中class描述事物：

​	成员变量：对应事物的属性

​	成员方法：对应事物的行为

#### 类的定义格式

```java
public class ClassName {
	// 成员变量
	// 成员方法
}
```

- 定义类：就是定义类的成员，包括成员变量、成员方法
- 成员变量：和之前的变量几乎一样，只是位置发生改变，在类中，方法外
- 成员方法：和之前的方法几乎一致，只不过把static去掉

### 定义类

```java
public class Person {
    //    成员变量
    String name;
    int age;

    //    成员方法
    public void sayHello() {
        System.out.println("你好");
    }
    public void eat(String good) {
        System.out.println("吃"+ good);
    }
}

```

### 使用类

步骤：

1、导包 -- 在同一个包下，可以省略

2、 创建 ---  格式  类名称  对象名 = new  类名称()

3、使用 -- 使用什么就点什么

```java
public class UsePerson {
    public static void main(String[] args) {
        //        创建实例对象
        Person person = new Person();
        //        使用成员变量
        System.out.println(person.name);
        //        给成员变量赋值
        person.age = 10;
        //        使用成员方法
        person.sayHello();
        person.eat("苹果");
    }
}
```



### 局部变量于成员变量

1. 定义的位置不同【重点】

   ​	局部变量：在方法内部

   ​	成员变量：在方法的外部，直接写在类中

2.  作用域范围不一样【重点】

   ​	局部变量： 只有方法中才可以使用，出了方法就不能再用

   ​	成员变量：整个类都可以使用

3.  默认值不一样【重点】

   ​	局部变量：没有默认值，如果想使用，必须赋值

   ​	成员变量：如果没有赋值，会有默认值，规则和数组一样

###### 代码案例

```java
public class Person {
    //    成员变量
    String name;
    int age;
    //    成员方法
    public void sayHello() {
        // 局部变量
        int id = 0;
    }
}
```



## 4.3 面向对象三大特征

### 1、封装

#### 	1.1 什么是封装

> ​		在定义类的时候，如果可以直接修改类中的字段那么就可能会出现以下的情况，age可以设置成1000，score可以设置为10000
>
> 　　所以就引出了封装的概念，那么什么是封装呢或者说封装可以实现那些目的
>
> 1. 封装可以隐藏实现的细节
> 2. 让使用者只能通过实现写好的访问方法来访问这些字段，这样一来我们只需要在这些方法中增加逻辑控制，限制对数据的不合理访问、
> 3. 方便数据检查，有利于于保护对象信息的完整性
> 4. 便于修改，提高代码的可维护性
>
> 　　为了实现良好的封装，需要从两个方面考虑
>
> 1. 把字段（成员变量）和实现细节隐藏起来，不允许外部直接访问
> 2. 把方法暴露出来，让方法控制这些成员变量进行安全的访问和操作
>
> 　　因此，封装就有两个含义：**把该隐藏的隐藏起来，把该暴露的暴露出来。**

#### 	1.2 实现封装的方式：使用访问控制符

​		Java提供三种访问权限，准确的说还有一种默认的访问权限，加上他一共四种

> - private 			在当前类中可以访问
> - default             在当前包内可以访问
> - protected        在当前类和他派生的类中都可以访问
> - public              公众的访问权限，谁都能访问   

示例：

```java
public class Teacher {
    private String name;
    private int age;
    private String obj;

    public void say() {
        System.out.println("讲课");
    }

    public void go() {
        System.out.println("去教室");
    }

    //    get（获取）、set（修改）方法
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        if (age <= 0 || age > 150) {
            return;
        } else {
            this.age = age;
        }
    }

    public String getObj() {
        return obj;
    }

    public void setObj(String obj) {
        this.obj = obj;
    }
}

```

使用

```java
    public static void main(String[] args) {
        MathTeacher mathTeacher = new MathTeacher();
        mathTeacher.setAge(15);
        System.out.println(mathTeacher.getAge());
        mathTeacher.say();
        mathTeacher.go();
    }
```

使用private修饰的变量，应该暴露接口拱外界使用，所以要添加getter/ setter方法

**注意：对于基本数据类型中Boolean值，getter方法一定写成isXxx形式，而setXxx规则不变**

### 2、继承

​		如同生活中的子女继承父母拥有的所有财产，程序中的继承性是指子类拥有父类的全部特征和行为，这是类之间的一种关系。Java 只支持单继承。

#### 示例

老师类

```java
public class Teacher {
    String name;
    int age;
    String obj;

    public void say() {
        System.out.println("讲课");
    }

    public void go() {
        System.out.println("去教室");
    }
}

```

数学老师类

```
public class MathTeacher  extends Teacher{
    // 重写方法
    public void go() {
        System.out.println("去数学办公室");
    }
}
```

这样数学老师就拥有了名字，和年龄，还有说的方法（都继承于父类），然后重写了go()方法

### 3、多态



## 4.4 this

 当方法的局部变量与成员变量重名的时候，根据  “ 就近原则” ，优先使用局部变量，如果需要访问本类中的成员变量，需要使用格式 

**this.成员变量名**

通过谁调用的方法，谁就是this

代码

```java
public class Person {
    //    成员变量
    String good;

    //    成员方法
    public void eat(String good) {
        // 成员变量
        this.good = "苹果";
        // 局部变量
        System.out.println("吃"+ good);
    }
}
```



## 4.5 构造方法

​	构造方法专门用来创建对象的方法，当我们通过关键字new来创建对象时，其实就是再调用构造方法。

​	**格式：**

​	public  类名称（参数类型  参数名称）{

​		方法体

​	}

​	**注意事项：**

1. ​	构造方法的名称必须和所在的类名称完全一致，就连大小写也要一样
2. ​    构造方法不要写返回值类型，连void都不写
3. ​    构造方法不能return一个具体的返回值
4. ​    如果没有编写构造方法，那么编译器会默认赠送一个构造方法，没有参数，方法体为空 public  Stuent（）{}
5. ​    一旦编写了至少一个构造方法，那么编译器将不再赠送
6. ​    构造方法也是可以进行重载（方法名称相同，参数列表不同）的

## 4.6  一个标准的类（Java Bean）

1. ​	所有的成员变量都是private关键字修饰
2. ​    为每一个成员变量编写一对getter/ setter方法
3. ​    编写一个无参构造方法
4.    编写一个全参数构造方法

### 4.7  匿名对象

> **创建对象的标准格式**
>
> **类名称  对象名  =  new  类名称();**

 匿名对象就是只有右边的对象，没有左边的名字和赋值运算符

new  类名称();

**注意事项：匿名对象只能使用唯一一次，下次再用不得不再创建一个新的对象**

**使用建议：如果确定一个对象只需要使用唯一的一次，就可以使用匿名对象**

# 五、Java API

## 1、Scanner类

​	**1.1 功能 ：实现键盘输入数据到程序中**

​	**1.2：引用类型的一般使用步骤**

​		1、导包

​		2、 创建  

  			类名称  对象名  = new  类名称();

​		3、使用

​				对象名.成员方法名()

```java
import java.util.Scanner;

// 获取键盘输入的一个int数字:  int num  = sc.nextInt()
// 获取键盘输入的一个字符串： String str = sc.next()
class ScannerDemo {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int num =  sc.nextInt();
        System.out.println(num);
    }
}
```

练习：计算输入三个数字的最大值

```java
import java.util.Scanner;

// 获取键盘输入的一个int数字:  int num  = sc.nextInt()
// 获取键盘输入的一个字符串： String str = sc.next()
class ScannerDemo {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("请输入第一个数字");
        int num =  sc.nextInt();
        System.out.println("请输入第2个数字");
        int num2 =  sc.nextInt();
        System.out.println("请输入第3个数字");
        int num3 =  sc.nextInt();
        int max = num>num2 ? num : num2;
        System.out.println(max > num3? max : num3 );
    }
}

```



## 2、 Random()  生成随机数

​	2.1  用于生成随机数 

​	2.2   用法

> ​	
>
> ```java
> import java.util.Random;
> 
> public class RandomDem01 {
>     public static void main(String[] args) {
>         Random random = new Random();
>         // 生成int类型的随机整数
>         int i = random.nextInt();
>         System.out.println(i);
>         System.out.println("==================");
>         // 生成 0-20 的随机数，但是不包括 20 （左闭右开）
>         int i1 = random.nextInt(20);
>         System.out.println(i1);
>     }
> }
> ```
>
> 



## 3、String

程序中所有的双引号字符串，都是String类的对象

**字符串的特点：**

1. ​	字符串的内容永不可变【重点】
2. ​    正因为字符串的不可改变，所以字符串是可以共享使用的
3. ​     字符串效果相当于char[]字符数组，但是底层是byte[]字节数组 

**字符串常量池：程序当中直接写双引号字符串，就都在字符串常量池中**

对于基本数据类型来说， == 是进行的是数值的比较

对于引用数据类型来说，== 进行的是地址值的比较

“” 定义的字符串再字符串常量池中  new出来的字符串在堆内存中



**常用方法**

1. public  int Length():  获取字符串当前含有的字符个数，拿到字符串的长度
2. public String concat(String  str): 将当前的字符串与参数的字符串拼接称为返回值新的字符串
3. public char charAt(int index): 获取指定索引位置的单个字符 （索引从0开始）
4. public int indexOf(String  str) :查找参数字符串在本字符串当中首次出现的位置，如果 没有  返回-1
5.  replace（old， new); 使用新字符串，替换旧的字符串 
6.  public String toLowerCace()  将字符串中的字母全部转换为小写
7. public String toUpperCase()  将字符串中的所有字母转换为大写
8. public String trim(): 去除字符串中的空格
9. public String substring(int beginIndex): 截取字符串，从beginIndex到结束
10. public String substring(int beginIndex， int endIndex): 截取字符串，从beginIndex开始，截取到endIndex
11. public String[]  split(“,”) :根据参数，对字符串进行分割，返回一个数组



**比较两个字符串是否相同：**

使用：

1、equals()  方法

2、equalsIgnoreCase() 方法的作用和语法与 equals() 方法完全相同，唯一不同的是 equalsIgnoreCase() 比较时不区分大小写



**equals 与 == 的区别**

**equals ：比较的是两个字符串的内容是否相同**

**== ： 是用来比较两个字符串的内存地址是否相同**



***<u>比较两个字符串是否相同，一定要使用equals</u>***

# 六、集合  ArrayList

## 	1、定义

​		数组的长度是固定的，但是ArrayList的长度是可以随意变化的

​		对于ArrayList来说，有一个尖括号<E>代表泛型

​		**泛型：也就是装在集合当中的所有元素，全都是统一的什么类型**

​		**注意：泛型只能是引用数据类型，不能是基本数据类型（基本类型使用包装类）**

​				**注意事项：对于ArrayList集合来说，直接打印得到的不是地址值，而是内容，如果内容为空，得到的是空的中括号[]**



## 	2、使用

```java
import java.util.ArrayList;

public class ArrayListDemo01 {
    public static void main(String[] args) {
        // 创建ArrayList集合，集合的名称是list，全部装的都是String字符串类型的数据
        // 备注： 从JDK 1.7开始，右侧的尖括号可以不写内容，但是尖括号本身还是要写
        ArrayList<String> list = new ArrayList<>();
        System.out.println(list);  //  []

        // 向集合中添加数据使用 add方法
        list.add("张三");
        list.add("李四");

        //  list.add(111); 错误写法，里面只能储存 String

        System.out.println(list); // [张三， 李四]
    }

}

```



## 3、ArrayList的常用方法

> ```java
> // public boolean add(E e): 向集合中添加元素，参数的类型与泛型一致，返回值代表添加是否成功，备注：对于ArrayList集合来	说，add添加动作一定是成功的，所以返回值可以不用
> // public E get(int index): 从集合中获取元素，参数是索引编号，返回值就是对应位置的元素
> // public E remove(int index): 从集合中删除元素，参数是索引编号，返回值就是被删除的元素
> // public int size(): 获取集合的尺寸长度，返回值是集合中包含的元素个数
> 
> import java.util.ArrayList;
> 
> public class ArrayListDemo02 {
>     public static void main(String[] args) {
>         // 创建集合
>         ArrayList<String> list = new ArrayList<>();
>         // 添加元素
>         list.add("张三");
>         list.add("李四");
>         // 获取元素
>         String s = list.get(1); // 李四
>         System.out.println(s);
>         // 移除元素
>         String remove = list.remove(0);// 张三
>         System.out.println(remove);
>         // 集合的长度
>         int size = list.size(); // 1
>         System.out.println(size);
>     }
> 
> }
> 
> ```
>
> 
>

## 4、遍历集合

```java
import java.util.ArrayList;

public class ArrayListDemo03 {
    public static void main(String[] args) {
        // 创建集合
        ArrayList<String> list = new ArrayList<>();
        // 添加元素
        list.add("张三");
        list.add("李四");
        // 遍历集合
        for (int i = 0; i < list.size(); i++) {
            String s = list.get(i);
            System.out.println(s);
        }
    }
}

```

## 5、包装类

如果希望向集合中储存基本数据类型，必须使用基本数据类型对应的包装类

从JDK 1.5+开始，支持自动装箱，自动拆箱

自动装箱： 基本类型 -- > 包装类型

自动拆箱： 包装类型 -->  基本类型

| 基本类型 | 包装类（引用类型，包装类都位于java.lang包下） |
| :------: | --------------------------------------------- |
|   byte   | Byte                                          |
|  short   | Short                                         |
|   int    | Integer【特殊】                               |
|   lang   | Lang                                          |
|  float   | Float                                         |
|  double  | Double                                        |
|   char   | Character 【特殊】                            |
| boolean  | Boolean                                       |

```java
import java.util.ArrayList;

public class ArrayListDemo04 {
    public static void main(String[] args) {
     ArrayList<Integer> num = new ArrayList<>();
        num.add(11);
        num.add(22);
        System.out.println(num); // [11, 22]
    }
}
```



练习一

生成6个1-33之间的随机整数，添加到集合，并遍历集合

```java
import java.util.ArrayList;
import java.util.Random;

public class ArrayListDemo05 {
    public static void main(String[] args) {
        Random r = new Random();
        ArrayList<Integer> list = new ArrayList<>();

        for (int i = 0; i < 6; i++) {
            int num = r.nextInt(33) + 1;
            list.add(num);
        }

        for (int i = 0; i < list.size(); i++) {
            System.out.println(list.get(i));
        }
    }
}

```



练习二

自定义四个学生对象，添加到集合，并遍历

```java
public class Student {
    private String name;
    private int age;

    public Student() {
    }

    public Student(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getName() {
        return name;
    }

    public int getAge() {
        return age;
    }
}

```

```java
import java.util.ArrayList;

public class ArrayListDemo06 {
    public static void main(String[] args) {
        ArrayList<Student> students = new ArrayList<>();
        Student s1 = new Student("张三" , 12);
        Student s2 = new Student("李四" , 18);
        Student s3 = new Student("王五" , 22);

        students.add(s1);
        students.add(s2);
        students.add(s3);

        for (int i = 0; i < students.size(); i++) {
            System.out.println(students.get(i).getName() + students.get(i).getAge());
        }
    }
}

```



# 七、static关键字

一旦使用了static关键字，那么内容将不再属于对象自己，而是属于类，所以凡是本类的对象，都共享一份































