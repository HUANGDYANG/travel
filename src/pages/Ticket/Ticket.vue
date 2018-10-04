<template>
  <div>
    <TicketHeader :list = "ticketList"></TicketHeader>
    <TicketList :list="ticketList"></TicketList>

    <TicketFooter></TicketFooter>
  </div>
</template>

<script>
  import TicketHeader from './components/Header'
  import TicketFooter from '../../common/footer/Footer'
  import TicketList from './components/List'

  import axios from 'axios'

  export default {
    name: "Ticket",
    data() {
      return {
        ticketList: []
      }
    },
    components: {
      TicketHeader,
      TicketFooter,
      TicketList,
    },
    methods: {
      getTicketInfo() {
        axios.get('api/ticket.json').then(
          this.getTicketInfoSucc
        )
      },

      getTicketInfoSucc(res) {
        res = res.data
        if (res.ret && res.data) {
          const data = res.data
          this.ticketList = data.ticketList
        }
      }
    },

    mounted() {
      this.getTicketInfo()
    }
  }
</script>

<style scoped lang="stylus">

</style>
