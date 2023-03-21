import { builder } from "../builder";
import { prisma } from "../db";

builder.prismaObject("Card", {
	fields: (t) => ({
		id: t.exposeID("id"),
		slug: t.exposeString("slug"),
		name: t.exposeString("name"),
		ability: t.exposeString("ability"),
		cost: t.exposeInt("cost"),
		power: t.exposeInt("power"),
		tags: t.exposeStringList("tags"),
		source: t.exposeString("source"),
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
