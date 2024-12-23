import react from "react";
import Link from "next/link";
import Image from "next/image";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa6";
import { ImageConfigContext } from "next/dist/shared/lib/image-config-context.shared-runtime";
import { CiSearch } from "react-icons/ci";
import { FaRegCircleRight } from "react-icons/fa6";

const ShopList = [

    {
        id: 1, 
        name: "Fresh Lime",
        lable: "Fresh Lime",
        image: "/shop/fresh lime.png",
        rate: "$38.00"
    },
    {
        id: 2,
        name: "Chocolate Muffin",
        lable: "Chocolate Muffin",
        image: "/shop/muffin.png",
        rate: "$28.00"
    },
    {
        id: 3,
        name: "Burger",
        lable: "Burger",
        image: "/shop/burger.png",
        rate: "$21.00 "
    },
    {
        id: 4,
        name: "Country Burger",
        lable: "Country Burger",
        image: "/shop/country burger.png",
        rate: "$45.00"
    },
    {
        id: 5, 
        name: "Drink",
        lable: "Drink",
        image: "/shop/drink.png",
        rate: "$23.00"
    },
    {
        id: 6,
        name: "Pizza",
        lable: "Piza",
        image: "/shop/pizza.png",
        rate: "$43.00"
    },
    {
        id: 7,
        name: "Cheese Butter",
        lable: "Cheese Butter",
        image: "/shop/cheese butter.png",
        rate: "$45.00"
    },
    {
        id: 8,
        name: "Sandwiches",
        lable: "Sandwiches",
        image: "/shop/sandwiche.png",
        rate: "$23.00"
    },
    {
        id: 9,
        name: "Chicken Chup",
        lable: "Chicken Chup",
        image: "/shop/chickenchup.png",
        rate: "$43.00"
    },
    {
        id: 10,
        name: "Country Burger",
        lable: "Country Burger",
        image: "/shop/country burger.png",
        rate: "$45.00"
    },
    {
        id: 11,
        name: "Drink",
        lable: "Drink",
        image: "/shop/drink.png",
        rate: "$23.00"
    },
    {
        id: 12,
        name: "Pizza",
        lable: "Piza",
        image: "/shop/pizza.png",
        rate: "$43.00"
    },
    {
        id: 13,
        name: "Cheese Butter",
        lable: "Cheese Butter",
        image: "/shop/cheese butter.png",
        rate: "$45.00"
    },
    {
        id: 14,
        name: "Sandwiches",
        lable: "Sandwiches",
        image: "/shop/sandwiche.png",
        rate: "$23.00"
    },
    {
        id: 15,
        name: "Chicken Chup",
        lable: "Chicken Chup",
        image: "/shop/chickenchup.png",
        rate: "$43.00"
    },

];
const LatestProducts =[
        {id: 1,
        product: "Piza",
        star: "/shop/star.png",
        image: "/shop/product.png",
        rate: "$35.00"},
        {id: 2,
        product: "CupChake",
        star: "/shop/star.png",
        image: "/shop/product.png",
        rate: "$35.00"},
        {id: 3,
        product: "Cookies",
        star: "/shop/star.png",
        image: "/shop/product.png",
        rate: "$35.00"},
        {id: 4,
        product: "Burger",
        star: "/shop/star.png",
        image: "/shop/product.png",
        rate: "$35.00"},                    
]

const Shop =()=>{
    return(


        <div className=" bg-white ">
           <header className="bg-cover bg-center h-52 flex flex-col text-center" style={{ backgroundImage: "url('/menu pic/headerpc.png')" }}>
                      <h1 className="text-3xl lg:text-5xl font-bold text-white tracking-wide mt-16">Our Shop</h1>
                      <div className="flex items-center justify-center text-sm lg:text-2xl">
                      <h1 className="text-white">Home</h1><MdKeyboardArrowRight className="text-white"/><h1 className="text-[#ff9f0d]"><u>Shop</u></h1>
                      </div>      
            </header>  
        

        <div className="flex flex-col lg:flex-row w-screen lg:w-[1400px] h-[3420px] lg:h-[1933px] py-16 ">
{/*Right Container */}
            <section className="container flex flex-col  w-screen lg:w-[984px] h-[3420px] lg:h-[1923px] px-2 ml-52 ">
            {/*Short and Show */}
                <div className="flex flex-col lg:flex-row pb-2 lg:bp-0">
                    <div className="flex items-start">
                        <h3 className="pt-[10px] pr-[8px]">Sort By :</h3>
                        <p className="w-[236px] h-[46px] flex justify-between border border-[#abd7be] opacity-40 p-[8.27px]">Newest<FaAngleDown className="mt-[6px]"/></p>
                    </div>
                    <div className="flex items-start pt-4 lg:pt-0 pb-2 lg:bp-0 lg:pl-8">
                        <h3 className="pt-[10px] pr-[20px] lg:pr-[8px]">Show :</h3>
                        <p className="w-[236px] h-[46px] flex justify-between border border-[#abd7be] opacity-40 p-[8.27px]">Default<FaAngleDown className="mt-[6px]"/></p>
                    </div>
                </div>
            {/*Images */}
                <div className=" grid grid-cols-1 lg:grid-cols-3 gap-4 pt-4 pl-6 lg:pl-0">
                    {ShopList.map((food)=>(                    
                        <div key={food.id}>
                            <Image src={food.image}
                            alt={food.name}
                            width={312}
                            height={267}
                            />
                            <div className="text-left">
                                <h3 className="text-[18px] pt-3">{food.name}</h3>
                                <p className="text-[16px] text-[#ff9f0d] pt-1">{food.rate}</p>
                            </div>
                        </div>                 
                    ))}
                </div>
            {/*numbers */}
                <div className="text-base text-[#ff9f0d] items-left lg:items-center flex lg:text-center lg:justify-center gap-2 lg:gap-[16px] my-5 lg:mt-[50px] mb-[150px] ml-6 lg:ml-0  lg:mb-[150px]">
                    <h3 className="w-[50px] h-[50px] border pt-3"><MdOutlineKeyboardDoubleArrowLeft className="ml-4 mt-1"/></h3>
                    <h3 className="w-[50px] h-[50px] border pt-3">1</h3> 
                    <h3 className="w-[50px] h-[50px] border bg-[#ff9f0d] text-white pt-3">2</h3> 
                    <h3 className="w-[50px] h-[50px] border pt-3">3</h3> 
                    <h3 className="w-[50px] h-[50px] border pt-3"><MdOutlineKeyboardDoubleArrowRight className="ml-4 mt-1" /></h3>
                </div>
            </section>
{/*Left Container */}
            <section className="container flex flex-col lg:flex-col w-[312px] h-[1489] ml-6 lg:ml-6 lg:mt-[70px] mt-[2060px] border">
            {/* Search Box and Cart Icon */}
                <div className=" items-left pl-8 lg:pl-6 ">
                    <div className="flex pt-8">
                        <input
                            type="text"
                            placeholder="Search Product"
                            className="bg-orange-100 px-4 py-2 text-sm text-black w-[202px] h-[46px]"
                            />
                        <span className="bg-[#ff9f0d] text-white w-[46px] h-[46px]">
                        <CiSearch className="mt-4 ml-4" /></span>
                    </div>
                </div>
                {/*Category */}
                <div className="pt-6 pl-8 lg:pl-6 pb-8">
                        <h3 className="text-[20px] pt-3">Category</h3>
                        <ul className="item-left text-[18px] pr-3 pt-4">                        
                            <input type="checkbox" value={"sand"} style={{ marginRight: "12px", marginTop: "12px" }}/>Sandwiches<br/>
                            <input type="checkbox" value={"sand"} style={{ marginRight: "12px", marginTop: "12px" }}/>Burger<br/>
                            <input type="checkbox" value={"sand"} style={{ marginRight: "12px", marginTop: "12px" }}/>Chicken Chup<br/>
                            <input type="checkbox" value={"sand"} style={{ marginRight: "12px", marginTop: "12px" }}/>Drink<br/>
                            <input type="checkbox" value={"sand"} style={{ marginRight: "12px", marginTop: "12px" }}/>Pizza<br/>
                            <input type="checkbox" value={"sand"} style={{ marginRight: "12px", marginTop: "12px" }}/>Thi<br/>
                            <input type="checkbox" value={"sand"} style={{ marginRight: "12px", marginTop: "12px" }}/>Non Veg<br/>
                            <input type="checkbox" value={"sand"} style={{ marginRight: "12px", marginTop: "12px" }}/>Uncategorized<br/>
                        </ul>
                    </div>
                {/*Classic Restaurent */}              
                    <div className="relative w-[248px] h-[286] pl-8 lg:pl-0">
                        <Image  src={"/shop/classic restaurent.png "}
                        alt="pic"
                        width={248}
                        height={286}/>
                        <div className="absolute  text-white text-left flex-col h-[208] top-8 left-12 lg:left-8">
                            <h4 className="text-[16px] ">perfect Taste</h4>
                            <h4 className="text-[20px] pt-3">Classic Restaurent</h4>
                            <h4 className="text-[16px] pt-4 text-[#ff9f0d]">45.00$</h4>
                        </div>
                        <div className ="absolute flex w-[200px] lg:w-[248px] pl-8 pt-4 text-left text-white h-16 bottom-0 left-8 lg:left-0" style={{background: "rgba(0,0,0,0.5)"}}>
                            <h4 >Shop Now</h4><FaRegCircleRight className="ml-4 mt-1" />
                        </div>                
                    </div>
                {/*Filter By */}
                    <div>
                        <h3 className="text-[20px] pl-8 lg:pl-0 pt-8">Filter By Price</h3>
                        <div className=" flex pl-8 lg:pl-0 pt-4">
                            <hr className="w-[10px] h-[10px] bg-[#ff9f0d] border-0 rounded-full"/>
                            <hr className="w-[268px] lg:w-[300] h-2 bg-[#ff9f0d] border-0 rounded-full"/>
                            <hr className="w-[10px] h-[10px] bg-[#ff9f0d] border-0 rounded-full"/>
                        </div>
                        <div className="flex justify-between pl-8 lg:pl-0 pt-3">
                            <p>From $0 to $8000</p>
                            <p>Filter</p>
                        </div>                
                    </div>
                {/*Latest Product */} 
                    <div className="text-[20px] pl-8 lg:pl-0 pt-8">
                        <h3>Latest Products</h3>
                        <div className=" flex ">
                            <div className=" flex-col">
                                {LatestProducts.map((product)=>(                    
                                    <div key={product.id}>
                                    <Image className="pt-6" src={product.image}
                                    alt={product.product}
                                    width={76}
                                    height={65}/>
                                    </div>))}
                            </div>
                
                            <div className="text-left flex-col">
                                {LatestProducts.map((pro)=>(                    
                                    <div key={pro.id} className="mt-5 ml-5">
                                    <h3 className="text-[18px]">{pro.product}</h3>
                                    <Image className="pt-2" src={pro.star}
                                    alt={"Stars"}
                                    width={62}
                                    height={9}/>
                                    <p className="text-[16px] text-[#ff9f0d] pt-1">{pro.rate}</p>
                                    </div>))}
                            </div>
                        </div>
                    </div>
                {/*Latest Product list */} 
                    <div className="py-1 pl-8 lg:pl-0">
                        <h3 className="text-[20px] pt-8">Product Tags</h3>
                        <div className="flex text-[16px] pt-6">
                            <h3 className="pr-3">Service</h3>
                            <h3 className="pr-3">Our Menu</h3>
                            <h3>Pizza</h3>
                        </div>
                        <div className="flex text-[16px] pt-3">
                            <h3 className="pr-3">Cup Cake</h3>
                            <h3 className="text-[#ff9f0d] pr-3"><u>Burger</u></h3>
                            <h3>Cookies</h3>
                        </div>
                        <div className="flex text-[16px] pt-3 pb-16 lg:pb-0">
                            <h3 className="pr-3">Our Sop</h3>
                            <h3>Tandoori Chicken</h3>
                        </div>
                    </div>    
            </section>
        </div>
        </div>
    )
};
export default Shop;