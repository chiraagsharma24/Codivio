import { QuickActionType } from "@/app/constants";
import { Card } from "./ui/card";

function ActionCard({ action, onClick }: { action: QuickActionType; onClick: () => void }) {
  return (
    <Card
      className="group relative overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg cursor-pointer"
      onClick={onClick}
    >
      {/* ACTION GRADIENT */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${action.gradient} opacity-100 group-hover:opacity-50 transition-opacity`}
      />

      {/* ACTION CONTENT WRAPPER */}
      <div className="relative p-4 sm:p-6 size-full">
        <div className="space-y-2 sm:space-y-3">
          {/* ACTION ICON */}
          <div
            className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center bg-${action.color}/10 group-hover:scale-110 transition-transform`}
          >
            <action.icon className={`h-5 w-5 sm:h-6 sm:w-6 text-${action.color}`} />
          </div>

          {/* ACTION DETAILS */}
          <div className="space-y-0.5 sm:space-y-1">
            <h3 className="font-semibold text-lg sm:text-xl group-hover:text-primary transition-colors">
              {action.title}
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground">{action.description}</p>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default ActionCard;