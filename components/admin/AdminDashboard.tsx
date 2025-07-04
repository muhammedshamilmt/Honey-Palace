"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  ShoppingCart,
  Package,
  Users,
  TrendingUp,
  AlertTriangle,
  Eye,
  Edit,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react"
import Image from "next/image"

const recentOrders = [
  {
    id: "HP-001",
    customer: "Priya Sharma",
    product: "500ml Raw Honey",
    amount: 350,
    status: "Processing",
    image: "/placeholder.svg?height=40&width=40",
    time: "2 hours ago",
  },
  {
    id: "HP-002",
    customer: "Rajesh Kumar",
    product: "1 Litre Raw Honey",
    amount: 700,
    status: "Shipped",
    image: "/placeholder.svg?height=40&width=40",
    time: "4 hours ago",
  },
  {
    id: "HP-003",
    customer: "Anita Patel",
    product: "Royal Glow Honey Wax",
    amount: 40,
    status: "Delivered",
    image: "/placeholder.svg?height=40&width=40",
    time: "1 day ago",
  },
  {
    id: "HP-004",
    customer: "Vikram Singh",
    product: "250ml Raw Honey",
    amount: 200,
    status: "Processing",
    image: "/placeholder.svg?height=40&width=40",
    time: "2 days ago",
  },
]

const topProducts = [
  { name: "500ml Raw Honey", sales: 145, revenue: 50750, trend: "up" },
  { name: "250ml Raw Honey", sales: 234, revenue: 46800, trend: "up" },
  { name: "1 Litre Raw Honey", sales: 89, revenue: 62300, trend: "up" },
  { name: "Royal Glow Honey Wax", sales: 67, revenue: 2680, trend: "down" },
]

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Dashboard Overview</h2>
          <p className="text-gray-600 dark:text-gray-300">Welcome back! Here's what's happening with your store.</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm">
            <Eye className="h-4 w-4 mr-2" />
            View Store
          </Button>
          <Button size="sm" className="bg-amber-600 hover:bg-amber-700">
            <Edit className="h-4 w-4 mr-2" />
            Quick Actions
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Total Orders</p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">23</p>
                <div className="flex items-center mt-2">
                  <ArrowUpRight className="h-4 w-4 text-green-600" />
                  <span className="text-sm text-green-600 font-medium">+12% from last month</span>
                </div>
              </div>
              <ShoppingCart className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Products</p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">4</p>
                <div className="flex items-center mt-2">
                  <ArrowUpRight className="h-4 w-4 text-green-600" />
                  <span className="text-sm text-green-600 font-medium">All active</span>
                </div>
              </div>
              <Package className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Customers</p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">156</p>
                <div className="flex items-center mt-2">
                  <ArrowUpRight className="h-4 w-4 text-green-600" />
                  <span className="text-sm text-green-600 font-medium">+8 new this week</span>
                </div>
              </div>
              <Users className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Revenue</p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">₹1,62,530</p>
                <div className="flex items-center mt-2">
                  <ArrowUpRight className="h-4 w-4 text-green-600" />
                  <span className="text-sm text-green-600 font-medium">+15% from last month</span>
                </div>
              </div>
              <TrendingUp className="h-8 w-8 text-amber-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts and Recent Activity */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Recent Orders */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Recent Orders
              <Button variant="ghost" size="sm">
                View All
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentOrders.map((order) => (
                <div
                  key={order.id}
                  className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  <div className="relative h-10 w-10 rounded-lg overflow-hidden bg-gray-100">
                    <Image src={order.image || "/placeholder.svg"} alt={order.product} fill className="object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-gray-900 dark:text-white truncate">{order.customer}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300 truncate">{order.product}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-gray-900 dark:text-white">₹{order.amount}</p>
                    <Badge
                      variant={
                        order.status === "Delivered" ? "default" : order.status === "Shipped" ? "secondary" : "outline"
                      }
                      className="text-xs"
                    >
                      {order.status}
                    </Badge>
                  </div>
                  <div className="text-xs text-gray-500">{order.time}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Top Products */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Top Products
              <Button variant="ghost" size="sm">
                View All
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topProducts.map((product, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  <div className="flex-1">
                    <p className="font-medium text-gray-900 dark:text-white">{product.name}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{product.sales} units sold</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-gray-900 dark:text-white">₹{product.revenue.toLocaleString()}</p>
                    <div className="flex items-center justify-end">
                      {product.trend === "up" ? (
                        <ArrowUpRight className="h-4 w-4 text-green-600" />
                      ) : (
                        <ArrowDownRight className="h-4 w-4 text-red-600" />
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Alerts */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <AlertTriangle className="h-5 w-5 text-amber-600 mr-2" />
            Alerts & Notifications
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
              <div className="flex items-center space-x-3">
                <AlertTriangle className="h-5 w-5 text-red-600" />
                <div>
                  <p className="font-medium text-red-900 dark:text-red-100">Low Stock Alert</p>
                  <p className="text-sm text-red-700 dark:text-red-300">Royal Glow Honey Wax has only 5 units left</p>
                </div>
              </div>
              <Button size="sm" variant="outline">
                Restock
              </Button>
            </div>
            <div className="flex items-center justify-between p-3 bg-amber-50 dark:bg-amber-900/20 rounded-lg">
              <div className="flex items-center space-x-3">
                <Package className="h-5 w-5 text-amber-600" />
                <div>
                  <p className="font-medium text-amber-900 dark:text-amber-100">Pending Orders</p>
                  <p className="text-sm text-amber-700 dark:text-amber-300">3 orders are waiting to be processed</p>
                </div>
              </div>
              <Button size="sm" variant="outline">
                Process
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
