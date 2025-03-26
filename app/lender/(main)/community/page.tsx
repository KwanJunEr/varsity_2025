import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DiscussionTab from "./components/DiscussionTab";
import ActionVotingTab from "./components/ActionVotingTab";
import InterestRateTab from "./components/InterestRateTab";
const Commuity = () => {
  return (
    <section className="px-2 py-2">
      <div className="px-[300px]">
        <div className="min-w-[1200px]">
          <h1 className="text-3xl font-bold mb-8">Community Portal</h1>

          <Tabs defaultValue="discussion" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="discussion">Discussion</TabsTrigger>
              <TabsTrigger value="action-voting">Action Voting</TabsTrigger>
              <TabsTrigger value="interest-rate">Interest Rate</TabsTrigger>
            </TabsList>

            <TabsContent value="discussion">
              <DiscussionTab />
            </TabsContent>

            <TabsContent value="action-voting">
              <ActionVotingTab />
            </TabsContent>

            <TabsContent value="interest-rate">
              <InterestRateTab />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Commuity;
