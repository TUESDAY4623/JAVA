class A{
    public A(){
        super(); // super is by-default and not need to mention
        System.out.println("in A");
    }
    public A(int n){
        super();
        System.out.println("in A int");
    }
}
class B extends A{
    public B(){
        super(); 
        System.out.println("in B");
    }
    public B (int n) {
        this();
        System.out.println("in B int");
    }
}

public class demo {
    public static void main(String[] args) {
        B obj = new B(5);
        //B obj1 = new B(2);
    }
    
}