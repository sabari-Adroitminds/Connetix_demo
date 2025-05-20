"use client"

import * as React from "react"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import Shop from "./Shop"
import Play from "./Play"


const Navigation =()=>{
    return (
        <NavigationMenu className="hidden lg:block" >
            <NavigationMenuList>
                <NavigationMenuItem >
                    <NavigationMenuTrigger >Shop</NavigationMenuTrigger>
                    <NavigationMenuContent  >
                        <Shop/>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Play</NavigationMenuTrigger>
                    <NavigationMenuContent>
                       <Play/>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Learn</NavigationMenuTrigger>
                 
                </NavigationMenuItem>
                <NavigationMenuItem>
                <NavigationMenuTrigger>Connect</NavigationMenuTrigger>
                 
                </NavigationMenuItem>    
            </NavigationMenuList>
        </NavigationMenu>
    )
}





export default Navigation