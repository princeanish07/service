import React from "react";
import image from "../images/Plumber.png";
import image1 from "../images/plumber.jpg";

const landing = () => {
  return (
    <section className=" bg-[#474747]  grid-cols-1 gap-2 grid justify-items-center   ">
      <div className="max-w-[60Vw]">
        <article className="bg-[#004840] text-white flex flex-col gap-5   px-20 py-10 box-border">
          <h2 className="font-bold text-[2em]  text-orange-600 w-[50Vw]">
            CREATE YOUR OWN SERVICES AND SELL YOUR SERVICES ONLINE
          </h2>
          <div className="flex gap-5">
            <div className="w-[30Vw] flex flex-col gap-10 ">
              <p className="m-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                tenetur veritatis magni cumque corrupti quaerat eius est aperiam
                eos optio velit, fugit sapiente mollitia saepe perferendis,
              </p>
              <div className="g flex-1">
                <button className="bg-[#EF351B] rounded-full p-2 w-[200px] text-white font-semibold tracking-wider">
                  {" "}
                  GETTING STARTED
                </button>
              </div>
            </div>
            <div>
              <img
                src={image}
                className="h-[40Vh] w-full object-contain"
                w
                alt=""
              />
            </div>
          </div>
        </article>

        <article className="bg-white border-b border-gray-400 text-[#666] flex flex-col gap-5 p-10 box-border">
          <h1 className="text-lg font-semibold text-center text-green-400">
            ABOUT US
          </h1>

          <div className="grid grid-cols-2 gap-4">
            <div className="grid grid-cols-1 gap-5 ">
              <p className="m-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                tenetur veritatis magni cumque corrupti quaerat eius est aperiam
                eos optio velit, fugit sapiente mollitia saepe perferendis,
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem, adipisci. Aperiam veritatis vel itaque, quidem quo
                quas ipsum sint eligendi quasi! Iusto ipsum facere ipsa ut
                laboriosam. Itaque, ab consequuntur.
              </p>
              <div className=" flex-1">
                <button className="bg-[#EF351B] rounded-md p-2 w-[150px] text-white font-semibold ">
                  {" "}
                  SEE MORE
                </button>
              </div>
            </div>
            <div>
              <img
                src={image1}
                className="max-h-[30Vh] w-full object-cover"
                w
                alt=""
              />
            </div>
          </div>
        </article>

        <article className=" bg-white  p-5 border-b border-gray-400   ">
          <h2 className=" text-[1.2em] font-bold  m-8 text-center text-green-400 ">
            DISCOVER SERVICES
          </h2>
          <div class="featured-services  m-5  bg-[#fff]  rounded-lg flex gap-10">
            <div class="service-card">
              <img src={image1} alt="" />
              <div class="service-title">Graphic Design</div>
              <div class="service-description">
                Eye-catching visuals for your brand.
              </div>
              <a href="#" class="learn-more-btn">
                Learn More
              </a>
            </div>

            <div class="service-card">
              <img src={image1} alt="" />

              <div class="service-title">Web Development</div>
              <div class="service-description">
                Build your online presence with expert developers.
              </div>
              <a href="#" class="learn-more-btn">
                Learn More
              </a>
            </div>

            <div class="service-card">
              <img src={image1} alt="" />

              <div class="service-title">Content Writing</div>
              <div class="service-description">
                Engaging content tailored to your audience.
              </div>
              <a href="#" class="learn-more-btn  ">
                Learn More
              </a>
            </div>
          </div>
        </article>

        <article className=" bg-white  p-5   border-b border-gray-400  ">
          <h2 className=" text-[1.2em] font-semibold m-8 text-center text-green-400">
            EXPLORE LEADING SERVICE EXPERTS
          </h2>

          <div class="featured-providers">
            <div class="provider-card">
              <img class="provider-image" src={image1} alt="Provider 1 Image" />
              <div class="provider-name">John Doe</div>
              <div class="provider-profession">Graphic Designer</div>
              <div class="provider-description">
                Experienced graphic designer with a passion for creating
                visually stunning designs.
              </div>
              <button class="view-profile-btn">View Profile</button>
            </div>

            <div class="provider-card">
              <img class="provider-image" src={image1} alt="Provider 2 Image" />
              <div class="provider-name">Jane Smith</div>
              <div class="provider-profession">Marketing Consultant</div>
              <div class="provider-description">
                Strategic marketing consultant specializing in digital marketing
                and brand development.
              </div>
              <button class="view-profile-btn">View Profile</button>
            </div>

            <div class="provider-card">
              <img class="provider-image" src={image1} alt="Provider 2 Image" />
              <div class="provider-name">Jane Smith</div>
              <div class="provider-profession">Marketing Consultant</div>
              <div class="provider-description">
                Strategic marketing consultant specializing in digital marketing
                and brand development.
              </div>
              <button class="view-profile-btn">View Profile</button>
            </div>
          </div>
        </article>

        <article className=" bg-white p-5   border-b border-gray-400 ">
          <h2 className=" text-[1.2em] font-semibold m-8   text-center text-green-400">
            SUCCESS STORIES
          </h2>
          <div class="m-5  bg-[#fff]  rounded-lg flex gap-10 ">
            <div class="testimonial">
              <div className="flex">
                <img src={image1} alt="Client 1" class="client-avatar" />
                <div class="client-name">
                  <p>John Doe</p>
                </div>
              </div>
              <div class="client-position">CEO, Company XYZ</div>
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                vel mauris nec risus pharetra condimentum."
              </p>
            </div>

            <div class="testimonial">
              <div className="flex">
                <img src={image1} alt="Client 2" class="client-avatar" />
                <div class="client-name">
                  <p>Jane Smith</p>
                </div>
              </div>
              <div class="client-position">Marketing Director, ABC Inc.</div>
              <p>
                "Nullam vel efficitur ligula, nec scelerisque ligula. Sed vel
                erat vel justo malesuada rhoncus at vitae elit."
              </p>
            </div>

            <div class="testimonial">
              <div className="flex">
                <img src={image1} alt="Client 2" class="client-avatar" />
                <div class="client-name">
                  <p>Jane Smith</p>
                </div>
              </div>
              <div class="client-position">Marketing Director, ABC Inc.</div>
              <p>
                "Nullam vel efficitur ligula, nec scelerisque ligula. Sed vel
                erat vel justo malesuada rhoncus at vitae elit."
              </p>
            </div>
          </div>
        </article>
        <section class="bg-white p-10">
          <h2 className="text-lg font-semibold text-center text-green-400">Frequently Asked Questions</h2>
          <div class=" mt-5 ">
            <div class="faq-item">
              <div class="question">What is [Your Marketplace Name]?</div>
              <div class="answer">
                [Your Marketplace Name] is an online platform that connects
                service providers with individuals or businesses seeking various
                services. Whether you need a freelancer, consultant, or other
                professionals, [Your Marketplace Name] is the place to find and
                hire them.
              </div>
            </div>

            <div class="faq-item">
              <div class="question">How can I join as a service provider?</div>
              <div class="answer">
                Joining as a service provider on [Your Marketplace Name] is
                easy. Simply click on the "Sign Up" button and follow the
                registration process. Once registered, you can create a profile,
                list your services, and start connecting with potential clients.
              </div>
            </div>

            <div class="faq-item">
              <div class="question">How does the payment process work?</div>
              <div class="answer">
                The payment process on [Your Marketplace Name] is secure and
                straightforward. Clients can make payments through various
                methods, including credit/debit cards or other supported payment
                options. Service providers will receive their payments through
                the chosen payout method after successfully completing a
                service.
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default landing;
