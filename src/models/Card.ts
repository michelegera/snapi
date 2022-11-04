import { builder } from "../builder";
import { prisma } from "../db";

builder.prismaObject("Card", {
  fields: (t) => ({
    id: t.exposeID("id"),
    name: t.exposeString("name"),
    type: t.exposeString("type"),
    cost: t.exposeInt("cost"),
    power: t.exposeInt("power"),
    ability: t.exposeString("ability"),
    trigger: t.exposeString("trigger", { nullable: true }),
  }),
});

builder.queryField("cards", (t) =>
  t.prismaField({
    type: ["Card"],
    resolve: async (query) => {
      return prisma.card.findMany({ ...query });
    },
  })
);
