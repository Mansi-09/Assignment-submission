//to print fizz buzz and fizzbuzzz
s=3
a=5
for(i=1;i<=100;i++){
    s=s-1
    a=a-1
    if(s==0&&a==0){
     s=3
     a=5
   console.log("fizzbuzz")
    }
    else if(s==0){
    s = 3
    console.log("fizz")
    }
    else if(a==0){
    a = 5
    console.log("buzz")
    }
    else
    console.log(i)
}


//to find palindrome in a sentence
let s ="madam speaks malayalam "
let a=""
let b=""
for(i of s){
    if(i !=" "){
      b= b + i
      a = i + a
    }
  else{
    if(a==b) console.log(a)
    a=""
    b=""
  }
}
        
