import { builder } from "../builder";
import { prisma } from "../db";

builder.prismaObject("Location", {
	fields: (t) => ({
		id: t.exposeID("id"),
		name: t.exposeString("name"),
		description: t.exposeString("description"),
		rarity: t.exposeString("rarity"),
		difficulty: t.exposeString("difficulty"),
		released: t.exposeBoolean("released"),
	}),
});

builder.queryField("locations", (t) =>
	t.prismaField({
		type: ["Location"],
		resolve: async (query) => {
			return prisma.location.findMany({ ...query });
		},
	}),
);
