"use client";

import {useState} from "react";
import {dataList} from "./data";
import githubIcon from "@/assets/github.svg";
import Image from "next/image";
import {ChromeOutlined, GithubOutlined, MoreOutlined} from "@ant-design/icons";
import {Tooltip} from "antd";

function Home() {
  const [currentTab, setCurrentTab] = useState("tool");
  const [data, setData] = useState(dataList);

  const handleChange = (e: any) => {
    setData(
      dataList.map((item) => {
        if (currentTab === item.id) {
          return {
            ...item,
            children: item.children.filter((item) => {
              const searchText = e.target.value;
              return (
                item.title.toLowerCase().includes(searchText) ||
                item.description.toLowerCase().includes(searchText)
              );
            }),
          };
        }
        return item;
      })
    );
  };

  const currentTabData = data.find((item) => item.id === currentTab);

  return (
    <div className="w-full h-screen flex items-center">
      <div className="w-60 h-full bg-[#f6f7fa] pt-6 px-5">
        <a
          href="#"
          className="h-8 leading-8 px-2 text-2xl font-bold text-blue-600"
        >
          Encyclopedia
        </a>

        <div className="pt-8">
          {dataList.map((group) => {
            const isCurrentTab = group.id === currentTab;
            return (
              <div
                key={group.id}
                className={`flex items-center h-12 mb-3 px-2 hover:bg-white cursor-pointer rounded-xl ${
                  isCurrentTab ? "bg-white" : ""
                }`}
                onClick={() => setCurrentTab(group.id)}
              >
                <div
                  className={`w-8 h-8 rounded-[50%] flex items-center justify-center text-white ${group.themeColor}`}
                >
                  {group.title.slice(0, 1)}
                </div>
                <div className="ml-3">{group.title}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex-1 h-full pt-6 flex flex-col overflow-hidden">
        <div className="flex justify-between pr-[4%] px-6">
          <input
            className="outline-none h-10 leading-10 inline-block bg-[#f6f7fa] w-96 rounded-3xl px-4"
            type="search"
            placeholder="搜索"
            onChange={handleChange}
          />
          <a href="https://github.com/lexmin0412/encyclopedia" target="_blank">
            <Image
              src={githubIcon}
              alt="github"
              className="h-10 w-10 cursor-pointer"
            />
          </a>
        </div>
        <div className="mt-6 overflow-auto px-6">
          <div className="w-full flex flex-wrap flex-1">
            {currentTabData?.children?.length ? (
              currentTabData.children.map((item) => {
                if (currentTabData.type === "tool") {
                  return (
                    <div
                      key={item.title}
                      className="bg-white shadow-xl w-[30%] mr-[3%] p-4  rounded-xl flex items-start mb-5  hover:transition-all hover:scale-105"
                    >
                      <div
                        className={`h-12 w-12 rounded-[50%] text-center flex items-center  justify-center text-white ${item.themeColor}`}
                      >
                        {item.title.slice(0, 1)}
                      </div>
                      <div className="ml-3 overflow-hidden flex-1">
                        <div className="flex items-center overflow-hidden">
                          <div className="flex-1 flex items-center overflow-hidden">
                            <span
                              className="text-lg overflow-hidden whitespace-nowrap text-ellipsis"
                              title={item.title}
                            >
                              {item.title}
                            </span>
                            <div className="flex items-center ml-2">
                              {item.tags?.map((tag) => {
                                return (
                                  <span
                                    key={`${item.title}_${tag}`}
                                    className="text-sm border rounded px-2 text-gray-600"
                                  >
                                    {tag}
                                  </span>
                                );
                              })}
                            </div>
                          </div>
                          <div className="pl-2">
                            <MoreOutlined />
                          </div>
                        </div>
                        <div
                          title={item.description}
                          className="text-gray-500 mt-2 text-sm overflow-hidden whitespace-nowrap text-ellipsis"
                        >
                          {item.description}
                        </div>
                        <div className="mt-2 text-slate-700">
                          {item.url && (
                            <Tooltip title="点我访问官方文档">
                              <a
                                title={item.url}
                                href={item.url}
                                target="_blank"
                                className="mr-2 hover:text-black"
                              >
                                <ChromeOutlined />
                              </a>
                            </Tooltip>
                          )}
                          {item.github && (
                            <Tooltip title="点我访问 Github">
                              <a
                                href={item.github}
                                title={item.github}
                                target="_blank"
                                className="mr-2 hover:text-black"
                              >
                                <GithubOutlined />
                              </a>
                            </Tooltip>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                }
                if (currentTabData.type == "article") {
                  return (
                    <a
                      key={item.title}
                      className="bg-white border w-[30%] mr-[3%] rounded-xl mb-5 cursor-pointer  hover:transition-all overflow-hidden"
                      href={item.url}
                      target="_blank"
                    >
                      <div className="h-10 leading-10 px-3 overflow-hidden  text-ellipsis whitespace-nowrap">
                        {item.title}
                      </div>
                      <div className="text-sm text-gray-600 px-3 w-full h-10 leading-5 mb-2 ellipsis-2">
                        {item.description}
                      </div>
                    </a>
                  );
                }
                return (
                  <a
                    key={item.title}
                    className="bg-white w-[30%] mr-[3%] mb-5 cursor-pointer  hover:transition-all overflow-hidden h-5 leading-5 pl-3 flex items-center"
                    href={item.url}
                    target="_blank"
                  >
                    <i
                      className={`w-1 inline-block h-full ${item.themeColor}`}
                    />
                    <span className="ml-3">{item.title}</span>
                  </a>
                );
              })
            ) : (
              <div>当前分类下暂无数据</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
