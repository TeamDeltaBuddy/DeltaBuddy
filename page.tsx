
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { RocketIcon, ShieldCheckIcon, BotIcon, BellRingIcon } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800 px-4 py-10 md:px-16 lg:px-32">
      <section className="text-center space-y-6 mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Take Control. Protect Your Capital.
        </h1>
        <p className="text-lg md:text-xl text-gray-600">
          India's first options assistant built to protect retail traders from blind F&O losses.
        </p>
        <Button className="text-lg px-6 py-4 rounded-2xl shadow-lg">
          Join the Waitlist
        </Button>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="shadow-xl rounded-2xl">
          <CardContent className="p-6 space-y-3">
            <div className="flex items-center gap-3 text-indigo-600">
              <RocketIcon className="w-6 h-6" />
              <h3 className="text-xl font-semibold">Real-Time Adjustments</h3>
            </div>
            <p className="text-gray-600">
              DeltaBuddy adjusts your Iron Condor dynamically using delta-gamma logic.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-xl rounded-2xl">
          <CardContent className="p-6 space-y-3">
            <div className="flex items-center gap-3 text-indigo-600">
              <ShieldCheckIcon className="w-6 h-6" />
              <h3 className="text-xl font-semibold">Capital Protection Logic</h3>
            </div>
            <p className="text-gray-600">
              Built-in trailing stop loss, VIX filter, breakeven defense and hedged structures.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-xl rounded-2xl">
          <CardContent className="p-6 space-y-3">
            <div className="flex items-center gap-3 text-indigo-600">
              <BotIcon className="w-6 h-6" />
              <h3 className="text-xl font-semibold">Fully Automated</h3>
            </div>
            <p className="text-gray-600">
              DeltaBuddy connects to Dhan and trades automatically. No human intervention.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-xl rounded-2xl">
          <CardContent className="p-6 space-y-3">
            <div className="flex items-center gap-3 text-indigo-600">
              <BellRingIcon className="w-6 h-6" />
              <h3 className="text-xl font-semibold">Telegram Alerts</h3>
            </div>
            <p className="text-gray-600">
              Get live alerts with Greeks, adjustments, and emotion-free decisions.
            </p>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
