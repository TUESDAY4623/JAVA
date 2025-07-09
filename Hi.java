class Hi{
    public static void main(String args[]) {
        int x = 3;
        int y = 6;
        Calc obj = new Calc(); // calling calculator
        int r1 = obj.add(x, y);
        int r2 = obj.sub(x, y);
        AdvCalc obj1 = new AdvCalc(); // calling advance  calculator
        int r3 = obj1.div(x, y);
        int r4 = obj1.multi(x, y);
        VeryAdvCalc obj2 = new VeryAdvCalc(); // calling
        int r5 = obj2.power(x, y);
        int r6 = obj2.root(x);
        int r7 = obj2.root(y);
        System.out.println(r1 + " " + r2);
        System.out.println(r3 + " " + r4);
        System.err.println(r5 + " " + r6 + " " + r7);
    }
}