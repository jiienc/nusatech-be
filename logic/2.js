function analyzeResponseTimes(responseTimes) {
    // Avg
    const totalTime = responseTimes.reduce((sum, log) => sum + log.time, 0);
    const averageTime = totalTime / responseTimes.length;

    return {
        average: averageTime,
        total: responseTimes.length
    };
}

// Test Cases
const testCases = [
    // Test Case 1
    {
        name: "Test Case 1",
        data: [
            { endpoint: '/api/v1/users', time: 120 },
            { endpoint: '/api/v1/products', time: 80 },
            { endpoint: '/api/v1/orders', time: 150 },
            { endpoint: '/api/v1/users', time: 100 }
        ]
    },
    
    // Test Case 2:
    {
        name: "Test Case 2",
        data: [
            { endpoint: '/api/v1/users', time: 100 },
            { endpoint: '/api/v1/users', time: 150 },
            { endpoint: '/api/v1/users', time: 200 }
        ]
    },
    
    // Test Case 3:
    {
        name: "Test Case 3",
        data: [
            { endpoint: '/api/v1/users', time: 1 },
            { endpoint: '/api/v1/products', time: 10000 },
            { endpoint: '/api/v1/orders', time: 5000 }
        ]
    }
];

testCases.forEach(test => {
    console.log(`=== ${test.name} ===`);
    try {
        const result = analyzeResponseTimes(test.data);
        console.log("Result:", JSON.stringify(result, null, 2));
        console.log("\n");
    } catch (error) {
        console.error(`Error in ${test.name}:`, error.message);
        console.log("\n");
    }
});
