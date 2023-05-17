import { GrNext, GrPrevious } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";
const testi = [
  {
    id: 1,
    photo:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium qui maiores alias, quod assumenda temporibus in rem illum repudiandae. Reprehenderit labore dolorum corrupti aspernatur quae nulla distinctio dignissimos odit, sit ipsum saepe id qui perferendis, totam esse cupiditate placeat porro impedit deserunt! Recusandae illo a maiores veniam nam enim libero.",
    name: "Marvin Jhonson",
  },
  {
    id: 2,
    photo:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis debitis sequi amet vel quasi. Nisi officiis iusto nihil quam ad laudantium asperiores nesciunt. Sapiente maxime modi recusandae, necessitatibus natus blanditiis!",
    name: "Smith Harsh",
  },
  {
    id: 3,
    photo:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi dolore, mollitia aliquam suscipit, voluptatem, magnam sint fugit beatae corrupti harum dolorum? Asperiores ullam pariatur accusamus magni ducimus eos nostrum illo eveniet tempora ipsam aliquam voluptates, iste ratione nemo sapiente maxime error impedit sunt? Nesciunt, saepe!",
    name: "Kelly Barbon",
  },
  {
    id: 4,
    photo:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti debitis mollitia neque dolorum incidunt error doloribus tempora ut? Suscipit illum ut rem? Fuga dolorem est magnam aut, nihil qui fugit eum illo, nam ut reprehenderit voluptates esse alias voluptatem expedita eligendi consequatur autem sed iure pariatur error sit accusantium in! Quo, sequi? Necessitatibus cum ipsam at eos odio iure rerum.",
    name: "Tom Karban",
  },
  {
    id: 5,
    photo:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quidem reprehenderit cumque quod, asperiores consequuntur nesciunt inventore? Impedit, atque ad.",
    name: "Alexis",
  },
];

const TestimonialSection = () => {
  return (
    <div className="py-5">
      <div className="text-center">
        <h1 className="head_text">Testimonial</h1>
        <p className="title_text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus,
          labore!
        </p>
      </div>
      <div className="grid grid-flow-col auto-cols-[32%] gap-5 mx-5 pt-16 overflow-hidden">
        {testi?.map((data, index) => (
          <div
            key={index}
            className="bg-slate-800 flex flex-col justify-between items-center p-3 rounded-3xl relative"
          >
            <div className="absolute -top-14 left-0 right-0 w-full flex justify-center z-10">
              <img
                className="w-32 h-32 object-cover rounded-full"
                src={data.photo}
                alt=""
              />
            </div>
            <p className="text-sm font-normal leading-6 mt-16">
              {data.des.length >= 250
                ? `${data.des.substring(0, 250)}`
                : data.des}
              {data.des.length >= 250 ? (
                <button className="text-green-600 text-sm font-extrabold bg-slate-600 ml-2 rounded-md px-1">
                  More...
                </button>
              ) : (
                ""
              )}
            </p>
            <h5 className="text-lg font-semibold italic">{data.name}</h5>
          </div>
        ))}
      </div>
      <div className="flex gap-2 justify-center mt-3">
        {testi?.map((data, i) => (
          <div
            key={i}
            className="bg-white w-2 h-2 rounded-full cursor-pointer"
          ></div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSection;
