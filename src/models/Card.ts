import { builder } from "../builder";
import { prisma } from "../db";

builder.prismaObject("Card", {
	fields: (t) => ({
		id: t.exposeID("id"),
		name: t.exposeString("name"),
		description: t.exposeString("description"),
		cost: t.exposeInt("cost"),
		power: t.exposeInt("power"),
		abilities: t.exposeStringList("abilities"),
	}),
});

builder.queryField("cards", (t) =>
	t.prismaField({
		type: ["Card"],
		resolve: async (query) => {
			return prisma.card.findMany({ ...query });
		},
	}),
);
