"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Progress } from "@/components/ui/progress"
import { Switch } from "@/components/ui/switch"
import {
  Plus,
  Search,
  Copy,
  Edit,
  Trash2,
  CalendarIcon,
  Tag,
  Percent,
  DollarSign,
  Truck,
  Users,
  TrendingUp,
} from "lucide-react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"

// Mock coupon data
const coupons = [
  {
    id: 1,
    code: "HONEY20",
    type: "percentage",
    value: 20,
    description: "20% off all honey products",
    minOrder: 50,
    maxDiscount: 25,
    usageLimit: 100,
    usageCount: 45,
    startDate: new Date("2024-01-01"),
    endDate: new Date("2024-03-31"),
    status: "active",
    createdAt: new Date("2023-12-15"),
  },
  {
    id: 2,
    code: "FREESHIP",
    type: "free_shipping",
    value: 0,
    description: "Free shipping on orders over $75",
    minOrder: 75,
    maxDiscount: 15,
    usageLimit: 200,
    usageCount: 123,
    startDate: new Date("2024-01-01"),
    endDate: new Date("2024-12-31"),
    status: "active",
    createdAt: new Date("2023-12-01"),
  },
  {
    id: 3,
    code: "NEWCUSTOMER",
    type: "fixed",
    value: 10,
    description: "Welcome discount for new customers",
    minOrder: 30,
    maxDiscount: 10,
    usageLimit: 500,
    usageCount: 287,
    startDate: new Date("2024-01-01"),
    endDate: new Date("2024-12-31"),
    status: "active",
    createdAt: new Date("2023-11-20"),
  },
  {
    id: 4,
    code: "SUMMER2023",
    type: "percentage",
    value: 15,
    description: "Summer sale - 15% off",
    minOrder: 40,
    maxDiscount: 20,
    usageLimit: 150,
    usageCount: 150,
    startDate: new Date("2023-06-01"),
    endDate: new Date("2023-08-31"),
    status: "expired",
    createdAt: new Date("2023-05-15"),
  },
]

const getStatusColor = (status: string) => {
  switch (status) {
    case "active":
      return "bg-green-100 text-green-800 border-green-200"
    case "expired":
      return "bg-red-100 text-red-800 border-red-200"
    case "disabled":
      return "bg-gray-100 text-gray-800 border-gray-200"
    default:
      return "bg-gray-100 text-gray-800 border-gray-200"
  }
}

const getTypeIcon = (type: string) => {
  switch (type) {
    case "percentage":
      return <Percent className="h-4 w-4" />
    case "fixed":
      return <DollarSign className="h-4 w-4" />
    case "free_shipping":
      return <Truck className="h-4 w-4" />
    default:
      return <Tag className="h-4 w-4" />
  }
}

const getTypeColor = (type: string) => {
  switch (type) {
    case "percentage":
      return "bg-blue-100 text-blue-800 border-blue-200"
    case "fixed":
      return "bg-green-100 text-green-800 border-green-200"
    case "free_shipping":
      return "bg-purple-100 text-purple-800 border-purple-200"
    default:
      return "bg-gray-100 text-gray-800 border-gray-200"
  }
}

export default function AdminCouponsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false)
  const [startDate, setStartDate] = useState<Date>()
  const [endDate, setEndDate] = useState<Date>()
  const [newCoupon, setNewCoupon] = useState({
    code: "",
    type: "percentage",
    value: "",
    description: "",
    minOrder: "",
    maxDiscount: "",
    usageLimit: "",
    status: "active",
  })

  const filteredCoupons = coupons.filter(
    (coupon) =>
      coupon.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      coupon.description.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const stats = {
    total: coupons.length,
    active: coupons.filter((c) => c.status === "active").length,
    totalUsage: coupons.reduce((sum, coupon) => sum + coupon.usageCount, 0),
    avgUsage: Math.round(
      coupons.reduce((sum, coupon) => sum + (coupon.usageCount / coupon.usageLimit) * 100, 0) / coupons.length,
    ),
  }

  const handleCreateCoupon = () => {
    // Handle coupon creation logic here
    console.log("Creating coupon:", newCoupon, { startDate, endDate })
    setIsCreateDialogOpen(false)
    // Reset form
    setNewCoupon({
      code: "",
      type: "percentage",
      value: "",
      description: "",
      minOrder: "",
      maxDiscount: "",
      usageLimit: "",
      status: "active",
    })
    setStartDate(undefined)
    setEndDate(undefined)
  }

  const generateCouponCode = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
    let result = ""
    for (let i = 0; i < 8; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    setNewCoupon({ ...newCoupon, code: result })
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Coupons</h1>
          <p className="text-muted-foreground">Create and manage discount coupons for your customers</p>
        </div>
        <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Create Coupon
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Create New Coupon</DialogTitle>
              <DialogDescription>Set up a new discount coupon for your customers</DialogDescription>
            </DialogHeader>
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="code">Coupon Code</Label>
                  <div className="flex space-x-2">
                    <Input
                      id="code"
                      placeholder="HONEY20"
                      value={newCoupon.code}
                      onChange={(e) => setNewCoupon({ ...newCoupon, code: e.target.value.toUpperCase() })}
                    />
                    <Button type="button" variant="outline" onClick={generateCouponCode}>
                      Generate
                    </Button>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="type">Discount Type</Label>
                  <Select value={newCoupon.type} onValueChange={(value) => setNewCoupon({ ...newCoupon, type: value })}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="percentage">Percentage</SelectItem>
                      <SelectItem value="fixed">Fixed Amount</SelectItem>
                      <SelectItem value="free_shipping">Free Shipping</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Describe what this coupon offers..."
                  value={newCoupon.description}
                  onChange={(e) => setNewCoupon({ ...newCoupon, description: e.target.value })}
                />
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="value">
                    {newCoupon.type === "percentage"
                      ? "Percentage (%)"
                      : newCoupon.type === "fixed"
                        ? "Amount ($)"
                        : "Value"}
                  </Label>
                  <Input
                    id="value"
                    type="number"
                    placeholder={newCoupon.type === "percentage" ? "20" : "10"}
                    value={newCoupon.value}
                    onChange={(e) => setNewCoupon({ ...newCoupon, value: e.target.value })}
                    disabled={newCoupon.type === "free_shipping"}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="minOrder">Minimum Order ($)</Label>
                  <Input
                    id="minOrder"
                    type="number"
                    placeholder="50"
                    value={newCoupon.minOrder}
                    onChange={(e) => setNewCoupon({ ...newCoupon, minOrder: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="maxDiscount">Max Discount ($)</Label>
                  <Input
                    id="maxDiscount"
                    type="number"
                    placeholder="25"
                    value={newCoupon.maxDiscount}
                    onChange={(e) => setNewCoupon({ ...newCoupon, maxDiscount: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Start Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !startDate && "text-muted-foreground",
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {startDate ? format(startDate, "PPP") : "Pick a date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar mode="single" selected={startDate} onSelect={setStartDate} initialFocus />
                    </PopoverContent>
                  </Popover>
                </div>
                <div className="space-y-2">
                  <Label>End Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !endDate && "text-muted-foreground",
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {endDate ? format(endDate, "PPP") : "Pick a date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar mode="single" selected={endDate} onSelect={setEndDate} initialFocus />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="usageLimit">Usage Limit</Label>
                  <Input
                    id="usageLimit"
                    type="number"
                    placeholder="100"
                    value={newCoupon.usageLimit}
                    onChange={(e) => setNewCoupon({ ...newCoupon, usageLimit: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="status">Status</Label>
                  <div className="flex items-center space-x-2">
                    <Switch
                      id="status"
                      checked={newCoupon.status === "active"}
                      onCheckedChange={(checked) =>
                        setNewCoupon({ ...newCoupon, status: checked ? "active" : "disabled" })
                      }
                    />
                    <Label htmlFor="status">{newCoupon.status === "active" ? "Active" : "Disabled"}</Label>
                  </div>
                </div>
              </div>

              <div className="flex justify-end space-x-2">
                <Button variant="outline" onClick={() => setIsCreateDialogOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={handleCreateCoupon}>Create Coupon</Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Coupons</CardTitle>
            <Tag className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.total}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Coupons</CardTitle>
            <TrendingUp className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.active}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Usage</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalUsage}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Usage Rate</CardTitle>
            <Percent className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.avgUsage}%</div>
          </CardContent>
        </Card>
      </div>

      {/* Coupons Table */}
      <Card>
        <CardHeader>
          <CardTitle>All Coupons</CardTitle>
          <CardDescription>Manage your discount coupons</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between mb-4">
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search coupons..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-8 w-[300px]"
              />
            </div>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Code</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Value</TableHead>
                  <TableHead>Usage</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Valid Until</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredCoupons.map((coupon) => (
                  <TableRow key={coupon.id}>
                    <TableCell>
                      <div>
                        <div className="font-medium">{coupon.code}</div>
                        <div className="text-sm text-muted-foreground">{coupon.description}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge className={getTypeColor(coupon.type)}>
                        {getTypeIcon(coupon.type)}
                        <span className="ml-1 capitalize">{coupon.type.replace("_", " ")}</span>
                      </Badge>
                    </TableCell>
                    <TableCell>
                      {coupon.type === "percentage"
                        ? `${coupon.value}%`
                        : coupon.type === "fixed"
                          ? `$${coupon.value}`
                          : "Free Shipping"}
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <div className="text-sm">
                          {coupon.usageCount} / {coupon.usageLimit}
                        </div>
                        <Progress value={(coupon.usageCount / coupon.usageLimit) * 100} className="h-2" />
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(coupon.status)}>
                        <span className="capitalize">{coupon.status}</span>
                      </Badge>
                    </TableCell>
                    <TableCell>{format(coupon.endDate, "MMM dd, yyyy")}</TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Button variant="ghost" size="sm">
                          <Copy className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
