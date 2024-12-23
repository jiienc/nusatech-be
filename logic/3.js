const fetchUserData = () => new Promise((resolve) => {
    setTimeout(() => resolve({ name: 'John Doe', age: 30 }), 2000);
  });
  
  async function getUserData() {
    try {
      const userData = await fetchUserData();
      console.log(userData);
      return userData;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  
// Test
async function main() {
    try {
      const user = await getUserData();
      console.log(`Nama: ${user.name}, Umur: ${user.age}`);
    } catch (error) {
      console.error('Gagal mendapatkan data user:', error);
    }
  }
  
main();