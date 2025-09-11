import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import CardList from "@/components/CardList";
const SingleUserPage = () => {
  return (
    <div>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">DashBoard</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/users">Users</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      {/* Container */}
      <div className="mt-4 flex flex-col xl:flex-row gap-8">
        {/* Left */}
        <div className="w-full xl:w-1/3 space-y-6">
          {/* user badges container */}
          <div className="bg-primary-foreground p-4 rounded-lg"></div>
          {/* information container */}
          <div className="bg-primary-foreground p-4 rounded-lg"></div>
          {/* Cart List container */}
          <div className="bg-primary-foreground p-4 rounded-lg">
            <CardList title="Recently Transactions" />
          </div>
        </div>
        {/* Right */}
        <div className="w-full xl:w-2/3 space-y-6"></div>
      </div>
    </div>
  );
};

export default SingleUserPage;
