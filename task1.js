function task1(done){
    console.log('Task 1: Started');
    // Some async operation follows  
    setTimeout(function(){
      console.log('Task 1: Finished\n');
      done();
    }, 5000);
  };
  
  function task2(done){
    console.log('Task 2: Started');
    // Some async operation follows  
    setTimeout(function(){
      console.log('Task 2: Finished\n');
      done();
    }, 5000);
  };
  
  function task3(done){
    console.log('Task 3: Started');
    // Some async operation follows  
    setTimeout(function(){
      console.log('Task 3: Finished\n');
      done();
    }, 5000);
  };
  
  function task4(done){
    console.log('Task 4: Started');
    // Some async operation follows  
    setTimeout(function(){
      console.log('Task 4: Finished\n');
      done();
    }, 5000);
  };
  
  function task5(done){
    console.log('Task 5: Started');
    // Some async operation follows  
    setTimeout(function(){
      console.log('Task 5: Finished\n');
      done();
    }, 5000);
  };

  var task_runner = new TaskRunner();

task_runner.run([task1, task2, task3, task4, task5]);