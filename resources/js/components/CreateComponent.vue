<template>
    <div>
        <div class="row justify-content-center">
            <div class="col-md-6">
                <div class="card">
                    <div class="card-header">Create New Record</div>
                    <div class="card-body">
                        <div class="form-group">
                            <label for="name">Name</label>
                            <input type="text" class="form-control" name="name" v-model="formData.name">
                        </div>
                        <div class="form-group">
                            <label for="position">Position</label>
                            <input type="text" class="form-control" name="position" v-model="formData.position">
                        </div>
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="text" class="form-control" name="email" v-model="formData.email">
                        </div>
                        <div class="form-group">
                            <button @click.prevent="create" class="btn btn-primary">Create</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            formData: {
                name: '',
                position: '',
                email: '',
            }
        }
    },
    methods: {
        create() {
            axios.post('create', this.formData).then((response) => {
                console.log('record created!')
                this.$router.push('/')
                this.$toaster.success('Employee added successfully.')
            }).catch((error) => {
                console.log(error)
            });
        }
    }
}
</script>