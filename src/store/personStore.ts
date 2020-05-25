const store =  {
  testData: '0',
  data:{output:'0'},
  remove(){
    if(this.data.output.length<=1){
      this.data.output = '0';
    }else{
      this.data.output = this.data.output.slice(0,-1)
    }
  },
  empty(){
    this.data.output = '0';
  },
  inputContent(event: MouseEvent){
    const input = (event.target as HTMLButtonElement).textContent as string;
    if(this.data.output.length<=16){
      if(this.data.output ==='0' && input !=='.'){
        this.data.output = input;
      }else{
        if(this.data.output.indexOf('.')>=0 && input ==='.'){
          return
        }
        this.data.output += input;
      }
    }
  }
};

export default store