import React from 'react';

export const Hobbies = () => {
  return (
    <div>
      <section id="hobbies">
        <div className=''>
          <div className='row'>
            <div className='col'></div>
            <div className='col text-center'>
              <h1 className='text-white'>HOBBIES</h1>
            </div>
            <div className='col'></div>
          </div>

          <div className='row mt-5'>
            <div className='col-sm'></div>
            <div className='col-sm-12 col-md-8'>
              <div className='row justify-content-center'>
                <div className='col-10 col-md-4 mt-4'>
                  <div className='bg-white p-3 interestBox text-center'>
                    <img src="https://wallpaperaccess.com/full/1223017.jpg" className='mt-2' style={{ height: "200px", width: "180px" }} alt="Cycling" />
                    <h3 className='mt-2'><b>CYCLING</b></h3>
                    <p>I enjoy the exhilarating feeling of riding.</p>
                  </div>
                </div>
                <div className='col-10 col-md-4 mt-4'>
                  <div className='bg-white p-3 interestBox text-center'>
                    <img src="https://th.bing.com/th/id/OIP.S5ms47zNee4l5Y89qXkfAgHaE8?w=254&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" className='mt-2' style={{ height: "200px", width: "180px" }} alt="Mountain Climbing" />
                    <h3 className='mt-2'><b>MOUNTAIN CLIMBING</b></h3>
                    <p>It offers a thrilling adventure to me.</p>
                  </div>
                </div>
                <div className='col-10 col-md-4 mt-4'>
                  <div className='bg-white p-3 interestBox text-center'>
                    <img src="https://th.bing.com/th/id/OIP.bbgKiiTZsnCuz9XJvFznUQHaEx?rs=1&pid=ImgDetMain" className='mt-2' style={{ height: "200px", width: "180px" }} alt="Running" />
                    <h3 className='mt-2'><b>RUNNING</b></h3>
                    <p>I explore new paths and push my limits.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-sm'></div>
          </div>
        </div>
      </section>
    </div>
  );
};
