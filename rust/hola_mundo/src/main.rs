fn main() {
    // 
    let  x = 5;
    let y =  3;
         if x == 5{
            println!("{} is five and y is {}",x,y);
         } else {
            println!("{} is not five",x);
         }

         for x in 0..10{
            println!("hola {} mundo",x);
         }

         while x==5{
            println!("x id five");
         }
    println!("Hello, world!");

      let mut z = 5;
        match z {
        i => println!("one"),
        2| 3 => println!("two or three"),
        4..=10 => println!("four to ten"),
        _ => println!("something else"),
        }


}

fn gives_error() -> Result<i32,String>{
        Err("This is an error".to_String())
}

  
