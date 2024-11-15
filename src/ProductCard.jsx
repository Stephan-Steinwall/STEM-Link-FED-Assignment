import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"


function ProductCard(props) {

    const [num, setnum] = useState(0);

    const handleClick = (e) => {
        setnum(num + 1);
    }

    return (
        <Card className="w-[350px]">
            <div className="h-80 bg-card rounded-lg p-4 relative">
                <img src={props.path} className="block" alt="" />
            </div>

            <div className="flex px-4 mt-4 items-center justify-between">
                <h2 className="text-2xl font-semibold">{props.name}</h2>
                <span className="block text-lg font-medium">{props.price}</span>
                
            </div>

            <div className="px-4 mt-2">
                <p className="text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt optio suscipit neque inventore, rerum culpa.</p>
            </div>

            <div className="mt-1 p-4">
                <Button className="w-full" onClick={handleClick} >Buy Now</Button>
            </div>
        </Card>
    );
}

export default ProductCard;