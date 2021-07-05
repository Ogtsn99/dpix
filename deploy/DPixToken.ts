module.exports = async ({
	                        getNamedAccounts,
	                        deployments,
	                        getChainId,
	                        getUnnamedAccounts,
                        }) => {
	const { deploy } = deployments;
	const { deployer } = await getNamedAccounts();
	
	await deploy("DPixToken", {
		from: deployer,
		args: ["DPixToken", "DPXT", "10000000000000000000000"]
	});
};