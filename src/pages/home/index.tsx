import {useState} from "react";
import {dataList} from "./data";
import githubIcon from './../../assets/github.svg'

const getRandomClass = () => {
  const classList = [
    "bg-red-500",
    "bg-green-500",
    "bg-blue-500",
    "bg-yellow-500",
    "bg-pink-500",
    "bg-purple-500",
    "bg-indigo-500",
    "bg-orange-500",
  ];
  return classList[Math.floor(Math.random() * 8)];
};

function Home() {
  const [data, setData] = useState(dataList);

  const handleChange = (e: any) => {
    setData(
      dataList.filter((item) => {
				const searchText = e.target.value;
        return item.name.toLowerCase().includes(searchText) || item.description.toLowerCase().includes(searchText);
      })
    );
  };

  return (
    <div className="w-full h-screen flex items-center">
      <div className="w-60 h-full bg-[#f6f7fa] pt-6 px-5">
        <a
          href="#"
          className="h-8 leading-8 px-2 text-2xl font-bold text-blue-600"
        >
          Encyclopedia
        </a>
      </div>
      <div className="flex-1 h-full pt-6 px-6 flex flex-col">
        <div className="flex justify-between pr-[4%]">
          <input
            className="outline-none h-10 leading-10 inline-block bg-[#f6f7fa] w-96 rounded-3xl px-4"
            type="search"
            placeholder="搜索"
            onChange={handleChange}
          />
					<a href="https://github.com/lexmin0412/encyclopedia"
						target='_blank'
					>
						<img src={githubIcon} alt="github"
							className="h-10 w-10 cursor-pointer"
						/>
					</a>
        </div>
        <div className="mt-6 overflow-auto">
          <div className="w-full flex flex-wrap flex-1">
            {data.map((item) => {
              return (
                <a
                  className="bg-white shadow-xl w-[30%] mr-[3%] p-4  rounded-xl flex items-center mb-5 cursor-pointer  hover:transition-all hover:scale-105"
                  target="_blank"
                  href={item.website || item.github}
                >
                  <div
                    className={`h-12 w-12 rounded-[50%] text-center flex items-center  justify-center text-white ${getRandomClass()}`}
                  >
                    {item.name.slice(0, 1)}
                  </div>
                  <div className="ml-3 overflow-hidden flex-1">
                    <div
                      title={item.name}
                      className="text-lg overflow-hidden whitespace-nowrap text-ellipsis"
                    >
                      {item.name}
                    </div>
                    <div
                      title={item.description}
                      className="text-gray-500 mt-2 text-sm overflow-hidden whitespace-nowrap text-ellipsis"
                    >
                      {item.description}
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
